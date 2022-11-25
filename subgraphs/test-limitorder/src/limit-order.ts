import { BigInt, ethereum, Address, Bytes, log } from '@graphprotocol/graph-ts'
import {
  AllowTransfer as AllowTransferEvent,
  DepositETH as DepositETHEvent,
  DisallowTransfer as DisallowTransferEvent,
  FactorsUpdated as FactorsUpdatedEvent,
  LimitOrderFilledByProtocol as LimitOrderFilledByProtocolEvent,
  LimitOrderFilledByTrader as LimitOrderFilledByTraderEvent,
  OrderCancelled as OrderCancelledEvent,
  SetFeeCollector as SetFeeCollectorEvent,
  TransferOwnership as TransferOwnershipEvent,
  UpgradeCoordinator as UpgradeCoordinatorEvent,
  UpgradeSpender as UpgradeSpenderEvent
} from '../generated/LimitOrder/LimitOrder'
import {
  AllowTransfer,
  DepositETH,
  DisallowTransfer,
  FactorsUpdated,
  LimitOrderFilledByProtocol,
  LimitOrderFilledByTrader,
  OrderCancelled,
  SetFeeCollector,
  TransferOwnership,
  UpgradeCoordinator,
  UpgradeSpender,
  Order as OrderEntity,
  LimitOrderFilled as LimitOrderFilledEntity
} from '../generated/schema'

export function handleAllowTransfer(event: AllowTransferEvent): void {
  let entity = new AllowTransfer(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.spender = event.params.spender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositETH(event: DepositETHEvent): void {
  let entity = new DepositETH(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.ethBalance = event.params.ethBalance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisallowTransfer(event: DisallowTransferEvent): void {
  let entity = new DisallowTransfer(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.spender = event.params.spender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFactorsUpdated(event: FactorsUpdatedEvent): void {
  let entity = new FactorsUpdated(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.makerFeeFactor = event.params.makerFeeFactor
  entity.takerFeeFactor = event.params.takerFeeFactor
  entity.profitFeeFactor = event.params.profitFeeFactor
  entity.profitCapFactor = event.params.profitCapFactor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLimitOrderFilledByProtocol(event: LimitOrderFilledByProtocolEvent): void {
  let entity = new LimitOrderFilledByProtocol(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.orderHash = event.params.orderHash
  entity.maker = event.params.maker
  entity.taker = event.params.taker
  entity.allowFillHash = event.params.allowFillHash
  entity.relayer = event.params.relayer
  entity.profitRecipient = event.params.profitRecipient
  entity.fillReceipt_makerToken = event.params.fillReceipt.makerToken
  entity.fillReceipt_takerToken = event.params.fillReceipt.takerToken
  entity.fillReceipt_makerTokenFilledAmount = event.params.fillReceipt.makerTokenFilledAmount
  entity.fillReceipt_takerTokenFilledAmount = event.params.fillReceipt.takerTokenFilledAmount
  entity.fillReceipt_remainingAmount = event.params.fillReceipt.remainingAmount
  entity.fillReceipt_makerTokenFee = event.params.fillReceipt.makerTokenFee
  entity.fillReceipt_takerTokenFee = event.params.fillReceipt.takerTokenFee
  entity.takerTokenProfit = event.params.takerTokenProfit
  entity.takerTokenProfitFee = event.params.takerTokenProfitFee
  entity.takerTokenProfitBackToMaker = event.params.takerTokenProfitBackToMaker

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  // Get the order ID
  const orderId = event.params.orderHash.toHex()
  // Get this (= LimitOrderFilledByProtocolEvent) event ID
  const thisEventId = getEventID(event)

  // Load or create Order entity
  let orderEntity = OrderEntity.load(orderId)
  if (orderEntity == null) {
    orderEntity = new OrderEntity(orderId)

    orderEntity.makerToken = event.params.fillReceipt.makerToken
    orderEntity.takerToken = event.params.fillReceipt.takerToken
    orderEntity.maker = event.params.maker
    // orderEntity.taker = event.params.taker
    orderEntity.cancelled = false
    orderEntity.filled = false
    orderEntity.firstFilledTime = event.block.timestamp
    orderEntity.lastFilledOrCancelledTime = event.block.timestamp

    // Set relationship with limitOrderFilled entity
    // References:
    // Update array: https://thegraph.com/docs/en/developing/assemblyscript-api/#updating-existing-entities
    // Entity relationships: https://thegraph.com/docs/en/developing/creating-a-subgraph/#entity-relationships
    const limitOrderFilledArray = new Array<string>(0)
    limitOrderFilledArray.push(thisEventId)
    orderEntity.limitOrderFilledId = limitOrderFilledArray

    // 回推 order.takerTokenAmount 及 order.makerTokenAmount 值
    orderEntity.takerTokenAmount = event.params.fillReceipt.takerTokenFilledAmount.plus(event.params.fillReceipt.remainingAmount)
    orderEntity.makerTokenAmount = orderEntity.takerTokenAmount.times(event.params.fillReceipt.makerTokenFilledAmount).div(event.params.fillReceipt.takerTokenFilledAmount)

    // 第一次被 Fill 就結單
    // This order is filled after this LimitOrderFilledByProtocol event
    if (event.params.fillReceipt.remainingAmount.equals(BigInt.fromI32(0))) {
      orderEntity.filled = true
      log.warning('Order entity is filled, the remainingAmount = {}', [event.params.fillReceipt.remainingAmount.toString()])
    }
  } else {
    const limitOrderFilledArray = orderEntity.limitOrderFilledId
    limitOrderFilledArray.push(thisEventId)
    orderEntity.limitOrderFilledId = limitOrderFilledArray
    orderEntity.lastFilledOrCancelledTime = event.block.timestamp
    // This order is filled after this LimitOrderFilledByProtocol event
    if (event.params.fillReceipt.remainingAmount.equals(BigInt.fromI32(0))) {
      orderEntity.filled = true
      log.warning('Order entity is filled, the remainingAmount = {}', [event.params.fillReceipt.remainingAmount.toString()])
    }
  }

  // Load or create LimitOrderFilled entity
  let limitOrderFilledEntity = LimitOrderFilledEntity.load(thisEventId)
  if (limitOrderFilledEntity == null) {
    limitOrderFilledEntity = new LimitOrderFilledEntity(thisEventId)

    limitOrderFilledEntity.orderId = orderId
    limitOrderFilledEntity.orderType = 'ByProtocol'
    limitOrderFilledEntity.maker = event.params.maker as Bytes
    limitOrderFilledEntity.taker = event.params.taker as Bytes
    limitOrderFilledEntity.makerToken = event.params.fillReceipt.makerToken as Bytes
    limitOrderFilledEntity.takerToken = event.params.fillReceipt.takerToken as Bytes
    limitOrderFilledEntity.allowFillHash = event.params.allowFillHash
    limitOrderFilledEntity.makerTokenFilledAmount = event.params.fillReceipt.makerTokenFilledAmount
    limitOrderFilledEntity.takerTokenFilledAmount = event.params.fillReceipt.takerTokenFilledAmount
    limitOrderFilledEntity.remainingAmount = event.params.fillReceipt.remainingAmount
    limitOrderFilledEntity.makerTokenFee = event.params.fillReceipt.makerTokenFee
    limitOrderFilledEntity.takerTokenFee = event.params.fillReceipt.takerTokenFee
    limitOrderFilledEntity.relayer = event.params.relayer as Bytes
    limitOrderFilledEntity.profitRecipient = event.params.profitRecipient as Bytes
    limitOrderFilledEntity.takerTokenProfit = event.params.takerTokenProfit
    limitOrderFilledEntity.takerTokenProfitFee = event.params.takerTokenProfitFee
    limitOrderFilledEntity.takerTokenProfitBackToMaker = event.params.takerTokenProfitBackToMaker
    // recipient is only set by the LimitOrderFilledByTrader event
    limitOrderFilledEntity.recipient = Address.fromString('0x0000000000000000000000000000000000000000') as Bytes

    limitOrderFilledEntity.blockNumber = event.block.number
    limitOrderFilledEntity.blockTimestamp = event.block.timestamp
    limitOrderFilledEntity.transactionHash = event.transaction.hash
  }

  log.warning("LimitOrderFilled 'ByProtocol' Event at transaction hash: {}, Order entity id: {}, LimitOrderFilled entity id: {}", [event.transaction.hash.toHex(), orderEntity.id, limitOrderFilledEntity.id])

  // Save Entity
  orderEntity.save()
  limitOrderFilledEntity.save()
}

export function handleLimitOrderFilledByTrader(event: LimitOrderFilledByTraderEvent): void {
  let entity = new LimitOrderFilledByTrader(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.orderHash = event.params.orderHash
  entity.maker = event.params.maker
  entity.taker = event.params.taker
  entity.allowFillHash = event.params.allowFillHash
  entity.recipient = event.params.recipient
  entity.fillReceipt_makerToken = event.params.fillReceipt.makerToken
  entity.fillReceipt_takerToken = event.params.fillReceipt.takerToken
  entity.fillReceipt_makerTokenFilledAmount = event.params.fillReceipt.makerTokenFilledAmount
  entity.fillReceipt_takerTokenFilledAmount = event.params.fillReceipt.takerTokenFilledAmount
  entity.fillReceipt_remainingAmount = event.params.fillReceipt.remainingAmount
  entity.fillReceipt_makerTokenFee = event.params.fillReceipt.makerTokenFee
  entity.fillReceipt_takerTokenFee = event.params.fillReceipt.takerTokenFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  // Get the order ID
  const orderId = event.params.orderHash.toHex()
  // Get this (= LimitOrderFilledByProtocolEvent) event ID
  const thisEventId = getEventID(event)

  // Load or create Order entity
  let orderEntity = OrderEntity.load(orderId)
  if (orderEntity == null) {
    orderEntity = new OrderEntity(orderId)

    orderEntity.makerToken = event.params.fillReceipt.makerToken
    orderEntity.takerToken = event.params.fillReceipt.takerToken
    orderEntity.maker = event.params.maker
    // orderEntity.taker = event.params.taker
    orderEntity.cancelled = false
    orderEntity.filled = false
    orderEntity.firstFilledTime = event.block.timestamp
    orderEntity.lastFilledOrCancelledTime = event.block.timestamp

    // Set relationship with limitOrderFilled entity
    // References:
    // Update array: https://thegraph.com/docs/en/developing/assemblyscript-api/#updating-existing-entities
    // Entity relationships: https://thegraph.com/docs/en/developing/creating-a-subgraph/#entity-relationships
    const limitOrderFilledArray = new Array<string>(0)
    limitOrderFilledArray.push(thisEventId)
    orderEntity.limitOrderFilledId = limitOrderFilledArray

    // 回推 order.takerTokenAmount 及 order.makerTokenAmount 值
    orderEntity.takerTokenAmount = event.params.fillReceipt.takerTokenFilledAmount.plus(event.params.fillReceipt.remainingAmount)
    orderEntity.makerTokenAmount = orderEntity.takerTokenAmount.times(event.params.fillReceipt.makerTokenFilledAmount).div(event.params.fillReceipt.takerTokenFilledAmount)

    // 第一次被 Fill 就結單
    // This order is filled after this LimitOrderFilledByProtocol event
    if (event.params.fillReceipt.remainingAmount.equals(BigInt.fromI32(0))) {
      orderEntity.filled = true
      log.warning('Order entity is filled, the remainingAmount = {}', [event.params.fillReceipt.remainingAmount.toString()])
    }
  } else {
    const limitOrderFilledArray = orderEntity.limitOrderFilledId
    limitOrderFilledArray.push(thisEventId)
    orderEntity.limitOrderFilledId = limitOrderFilledArray
    orderEntity.lastFilledOrCancelledTime = event.block.timestamp
    // This order is filled after this LimitOrderFilledByProtocol event
    if (event.params.fillReceipt.remainingAmount.equals(BigInt.fromI32(0))) {
      orderEntity.filled = true
      log.warning('Order entity is filled, the remainingAmount = {}', [event.params.fillReceipt.remainingAmount.toString()])
    }
  }

  // Load or create LimitOrderFilled entity
  let limitOrderFilledEntity = LimitOrderFilledEntity.load(thisEventId)
  if (limitOrderFilledEntity == null) {
    limitOrderFilledEntity = new LimitOrderFilledEntity(thisEventId)

    limitOrderFilledEntity.orderId = orderId
    limitOrderFilledEntity.orderType = 'ByTrader'
    limitOrderFilledEntity.maker = event.params.maker as Bytes
    limitOrderFilledEntity.taker = event.params.taker as Bytes
    limitOrderFilledEntity.makerToken = event.params.fillReceipt.makerToken as Bytes
    limitOrderFilledEntity.takerToken = event.params.fillReceipt.takerToken as Bytes
    limitOrderFilledEntity.allowFillHash = event.params.allowFillHash
    limitOrderFilledEntity.makerTokenFilledAmount = event.params.fillReceipt.makerTokenFilledAmount
    limitOrderFilledEntity.takerTokenFilledAmount = event.params.fillReceipt.takerTokenFilledAmount
    limitOrderFilledEntity.remainingAmount = event.params.fillReceipt.remainingAmount
    limitOrderFilledEntity.makerTokenFee = event.params.fillReceipt.makerTokenFee
    limitOrderFilledEntity.takerTokenFee = event.params.fillReceipt.takerTokenFee
    limitOrderFilledEntity.recipient = event.params.recipient as Bytes
    // relayer, profitRecipient, takerTokenProfit, takerTokenProfitFee, takerTokenProfitBackToMaker
    // are only set by the LimitOrderFilledByProtocol event
    limitOrderFilledEntity.relayer = Address.fromString('0x0000000000000000000000000000000000000000') as Bytes
    limitOrderFilledEntity.profitRecipient = Address.fromString('0x0000000000000000000000000000000000000000') as Bytes
    limitOrderFilledEntity.takerTokenProfit = BigInt.fromI32(0)
    limitOrderFilledEntity.takerTokenProfitFee = BigInt.fromI32(0)
    limitOrderFilledEntity.takerTokenProfitBackToMaker = BigInt.fromI32(0)

    limitOrderFilledEntity.blockNumber = event.block.number
    limitOrderFilledEntity.blockTimestamp = event.block.timestamp
    limitOrderFilledEntity.transactionHash = event.transaction.hash
  }

  log.warning("LimitOrderFilled 'ByTrader' Event at transaction hash: {}, Order entity id: {}, LimitOrderFilled entity id: {}", [event.transaction.hash.toHex(), orderEntity.id, limitOrderFilledEntity.id])

  // Save Entity
  orderEntity.save()
  limitOrderFilledEntity.save()
}

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  let entity = new OrderCancelled(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.orderHash = event.params.orderHash
  entity.maker = event.params.maker

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  // Set order entity to be cancelled
  let orderEntity = OrderEntity.load(event.params.orderHash.toHex())
  if (orderEntity != null) {
    orderEntity.cancelled = true
    orderEntity.lastFilledOrCancelledTime = event.block.timestamp
    log.warning('Order entity is cancelled by cancelLimitOrder() method at transaction hash: ', [event.transaction.hash.toHex()])
    orderEntity.save()
  }
}

export function handleSetFeeCollector(event: SetFeeCollectorEvent): void {
  let entity = new SetFeeCollector(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.newFeeCollector = event.params.newFeeCollector

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransferOwnership(event: TransferOwnershipEvent): void {
  let entity = new TransferOwnership(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.newOperator = event.params.newOperator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgradeCoordinator(event: UpgradeCoordinatorEvent): void {
  let entity = new UpgradeCoordinator(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.newCoordinator = event.params.newCoordinator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpgradeSpender(event: UpgradeSpenderEvent): void {
  let entity = new UpgradeSpender(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.newSpender = event.params.newSpender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

/*********************************
 *             Helpers           *
 *********************************/

export const getEventID = (event: ethereum.Event): string => {
  let blockHash = event.block.hash.toHex()
  let txHash = event.transaction.hash.toHex()
  let logIndex = event.logIndex.toString()
  return blockHash + '-' + txHash + '-' + logIndex
}
