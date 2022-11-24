import { BigInt, BigDecimal, ethereum, Address, Bytes } from '@graphprotocol/graph-ts'
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

  // Set order ID
  const orderId = event.params.orderHash.toHex()

  // Set this event ID
  let thisEventId = getEventID(event)

  // Create Order Entity
  let orderEntity = OrderEntity.load(event.params.orderHash.toHex())
  if (orderEntity == null) {
    orderEntity = new OrderEntity(event.params.orderHash.toHex())

    orderEntity.makerToken = event.params.fillReceipt.makerToken
    orderEntity.takerToken = event.params.fillReceipt.takerToken
    orderEntity.maker = event.params.maker
    // orderEntity.taker = event.params.taker
    orderEntity.cancelled = false

    let limitOrderFilledArray = new Array<string>(0)
    limitOrderFilledArray.push(thisEventId)
    orderEntity.limitOrderFilled = limitOrderFilledArray
  }

  // Create LimitOrderFilled Entity
  let limitOrderFilledEntity = LimitOrderFilledEntity.load(thisEventId)
  if (limitOrderFilledEntity == null) {
    limitOrderFilledEntity = new LimitOrderFilledEntity(thisEventId)
    limitOrderFilledEntity.order = orderId
    limitOrderFilledEntity.taker = event.params.taker

    // if (orderEntity.taker == Address.fromString('0x0')) {
    //   limitOrderFilledEntity.orderType = 'ByProtocol'
    // } else {
    //   limitOrderFilledEntity.orderType = 'ByProtocolSpecifyTaker'
    // }
  }

  // https://thegraph.com/docs/en/developing/assemblyscript-api/#updating-existing-entities
  let limitOrderFilledArray = orderEntity.limitOrderFilled
  limitOrderFilledArray.push(thisEventId)
  orderEntity.limitOrderFilled = limitOrderFilledArray
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
}

export function handleOrderCancelled(event: OrderCancelledEvent): void {
  let entity = new OrderCancelled(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.orderHash = event.params.orderHash
  entity.maker = event.params.maker

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  // Set Order Entity
  let orderEntity = OrderEntity.load(event.params.orderHash.toHex())
  if (orderEntity !== null) {
    orderEntity.cancelled = false
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
