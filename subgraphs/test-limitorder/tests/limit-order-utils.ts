import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
  UpgradeSpender
} from "../generated/LimitOrder/LimitOrder"

export function createAllowTransferEvent(spender: Address): AllowTransfer {
  let allowTransferEvent = changetype<AllowTransfer>(newMockEvent())

  allowTransferEvent.parameters = new Array()

  allowTransferEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )

  return allowTransferEvent
}

export function createDepositETHEvent(ethBalance: BigInt): DepositETH {
  let depositEthEvent = changetype<DepositETH>(newMockEvent())

  depositEthEvent.parameters = new Array()

  depositEthEvent.parameters.push(
    new ethereum.EventParam(
      "ethBalance",
      ethereum.Value.fromUnsignedBigInt(ethBalance)
    )
  )

  return depositEthEvent
}

export function createDisallowTransferEvent(
  spender: Address
): DisallowTransfer {
  let disallowTransferEvent = changetype<DisallowTransfer>(newMockEvent())

  disallowTransferEvent.parameters = new Array()

  disallowTransferEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )

  return disallowTransferEvent
}

export function createFactorsUpdatedEvent(
  makerFeeFactor: i32,
  takerFeeFactor: i32,
  profitFeeFactor: i32,
  profitCapFactor: i32
): FactorsUpdated {
  let factorsUpdatedEvent = changetype<FactorsUpdated>(newMockEvent())

  factorsUpdatedEvent.parameters = new Array()

  factorsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "makerFeeFactor",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(makerFeeFactor))
    )
  )
  factorsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "takerFeeFactor",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(takerFeeFactor))
    )
  )
  factorsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "profitFeeFactor",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(profitFeeFactor))
    )
  )
  factorsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "profitCapFactor",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(profitCapFactor))
    )
  )

  return factorsUpdatedEvent
}

export function createLimitOrderFilledByProtocolEvent(
  orderHash: Bytes,
  maker: Address,
  taker: Address,
  allowFillHash: Bytes,
  relayer: Address,
  profitRecipient: Address,
  fillReceipt: ethereum.Tuple,
  takerTokenProfit: BigInt,
  takerTokenProfitFee: BigInt,
  takerTokenProfitBackToMaker: BigInt
): LimitOrderFilledByProtocol {
  let limitOrderFilledByProtocolEvent = changetype<LimitOrderFilledByProtocol>(
    newMockEvent()
  )

  limitOrderFilledByProtocolEvent.parameters = new Array()

  limitOrderFilledByProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "orderHash",
      ethereum.Value.fromFixedBytes(orderHash)
    )
  )
  limitOrderFilledByProtocolEvent.parameters.push(
    new ethereum.EventParam("maker", ethereum.Value.fromAddress(maker))
  )
  limitOrderFilledByProtocolEvent.parameters.push(
    new ethereum.EventParam("taker", ethereum.Value.fromAddress(taker))
  )
  limitOrderFilledByProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "allowFillHash",
      ethereum.Value.fromFixedBytes(allowFillHash)
    )
  )
  limitOrderFilledByProtocolEvent.parameters.push(
    new ethereum.EventParam("relayer", ethereum.Value.fromAddress(relayer))
  )
  limitOrderFilledByProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "profitRecipient",
      ethereum.Value.fromAddress(profitRecipient)
    )
  )
  limitOrderFilledByProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "fillReceipt",
      ethereum.Value.fromTuple(fillReceipt)
    )
  )
  limitOrderFilledByProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "takerTokenProfit",
      ethereum.Value.fromUnsignedBigInt(takerTokenProfit)
    )
  )
  limitOrderFilledByProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "takerTokenProfitFee",
      ethereum.Value.fromUnsignedBigInt(takerTokenProfitFee)
    )
  )
  limitOrderFilledByProtocolEvent.parameters.push(
    new ethereum.EventParam(
      "takerTokenProfitBackToMaker",
      ethereum.Value.fromUnsignedBigInt(takerTokenProfitBackToMaker)
    )
  )

  return limitOrderFilledByProtocolEvent
}

export function createLimitOrderFilledByTraderEvent(
  orderHash: Bytes,
  maker: Address,
  taker: Address,
  allowFillHash: Bytes,
  recipient: Address,
  fillReceipt: ethereum.Tuple
): LimitOrderFilledByTrader {
  let limitOrderFilledByTraderEvent = changetype<LimitOrderFilledByTrader>(
    newMockEvent()
  )

  limitOrderFilledByTraderEvent.parameters = new Array()

  limitOrderFilledByTraderEvent.parameters.push(
    new ethereum.EventParam(
      "orderHash",
      ethereum.Value.fromFixedBytes(orderHash)
    )
  )
  limitOrderFilledByTraderEvent.parameters.push(
    new ethereum.EventParam("maker", ethereum.Value.fromAddress(maker))
  )
  limitOrderFilledByTraderEvent.parameters.push(
    new ethereum.EventParam("taker", ethereum.Value.fromAddress(taker))
  )
  limitOrderFilledByTraderEvent.parameters.push(
    new ethereum.EventParam(
      "allowFillHash",
      ethereum.Value.fromFixedBytes(allowFillHash)
    )
  )
  limitOrderFilledByTraderEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  limitOrderFilledByTraderEvent.parameters.push(
    new ethereum.EventParam(
      "fillReceipt",
      ethereum.Value.fromTuple(fillReceipt)
    )
  )

  return limitOrderFilledByTraderEvent
}

export function createOrderCancelledEvent(
  orderHash: Bytes,
  maker: Address
): OrderCancelled {
  let orderCancelledEvent = changetype<OrderCancelled>(newMockEvent())

  orderCancelledEvent.parameters = new Array()

  orderCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "orderHash",
      ethereum.Value.fromFixedBytes(orderHash)
    )
  )
  orderCancelledEvent.parameters.push(
    new ethereum.EventParam("maker", ethereum.Value.fromAddress(maker))
  )

  return orderCancelledEvent
}

export function createSetFeeCollectorEvent(
  newFeeCollector: Address
): SetFeeCollector {
  let setFeeCollectorEvent = changetype<SetFeeCollector>(newMockEvent())

  setFeeCollectorEvent.parameters = new Array()

  setFeeCollectorEvent.parameters.push(
    new ethereum.EventParam(
      "newFeeCollector",
      ethereum.Value.fromAddress(newFeeCollector)
    )
  )

  return setFeeCollectorEvent
}

export function createTransferOwnershipEvent(
  newOperator: Address
): TransferOwnership {
  let transferOwnershipEvent = changetype<TransferOwnership>(newMockEvent())

  transferOwnershipEvent.parameters = new Array()

  transferOwnershipEvent.parameters.push(
    new ethereum.EventParam(
      "newOperator",
      ethereum.Value.fromAddress(newOperator)
    )
  )

  return transferOwnershipEvent
}

export function createUpgradeCoordinatorEvent(
  newCoordinator: Address
): UpgradeCoordinator {
  let upgradeCoordinatorEvent = changetype<UpgradeCoordinator>(newMockEvent())

  upgradeCoordinatorEvent.parameters = new Array()

  upgradeCoordinatorEvent.parameters.push(
    new ethereum.EventParam(
      "newCoordinator",
      ethereum.Value.fromAddress(newCoordinator)
    )
  )

  return upgradeCoordinatorEvent
}

export function createUpgradeSpenderEvent(newSpender: Address): UpgradeSpender {
  let upgradeSpenderEvent = changetype<UpgradeSpender>(newMockEvent())

  upgradeSpenderEvent.parameters = new Array()

  upgradeSpenderEvent.parameters.push(
    new ethereum.EventParam(
      "newSpender",
      ethereum.Value.fromAddress(newSpender)
    )
  )

  return upgradeSpenderEvent
}
