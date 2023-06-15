import { BigInt, Bytes, Address } from '@graphprotocol/graph-ts'
import { log } from '@graphprotocol/graph-ts'
import { FillOrder as FillOrderEvent } from '../generated/PMM/PMM'
import { addTradedToken, getUser, getEventID } from './helper'
import { FillOrder, FillOrderTotal, TradedToken, SwappedTotal as SwappedTotalEntity, User as UserEntity } from '../generated/schema'

export function handleFillOrder(event: FillOrderEvent): void {
  let fillTotalEntity = FillOrderTotal.load('1')
  if (fillTotalEntity == null) {
    fillTotalEntity = new FillOrderTotal('1')
    fillTotalEntity.total = BigInt.fromI32(0)
  }

  let fillOrderID = getEventID(event)
  let entity = FillOrder.load(fillOrderID)
  if (entity == null) {
    entity = new FillOrder(fillOrderID)
  }

  fillTotalEntity.total = fillTotalEntity.total.plus(BigInt.fromI32(1))
  entity.txNumber = fillTotalEntity.total
  entity.from = event.transaction.from as Bytes
  entity.to = event.transaction.to as Bytes
  entity.source = event.params.source
  entity.blockHash = event.block.hash.toHex()
  entity.transactionHash = event.transaction.hash.toHex()
  entity.executeTxHash = event.params.transactionHash
  entity.orderHash = event.params.orderHash
  entity.userAddr = event.params.userAddr
  entity.takerAssetAddr = event.params.takerAssetAddr
  entity.takerAssetAmount = event.params.takerAssetAmount
  entity.makerAddr = event.params.makerAddr
  entity.makerAssetAddr = event.params.makerAssetAddr
  entity.makerAssetAmount = event.params.makerAssetAmount
  entity.receiverAddr = event.params.receiverAddr
  entity.settleAmount = event.params.settleAmount
  entity.feeFactor = event.params.feeFactor
  entity.blockNumber = event.block.number
  entity.logIndex = event.logIndex
  entity.eventAddr = event.address
  entity.gasPrice = event.transaction.gasPrice
  entity.timestamp = event.block.timestamp.toI32()

  log.info('FillOrderEvent transaction hash: {}', [entity.transactionHash])

    // Test Dependence Event
    entity.SwappedTotal_total = BigInt.fromI32(0)
    const swappedTotalEntity = SwappedTotalEntity.load('1')
    if(swappedTotalEntity !== null) {
      entity.SwappedTotal_total = swappedTotalEntity.total
    }
    entity.User_lastSeen = 0
    const userEntity = UserEntity.load(event.params.userAddr.toHex())
    if(userEntity !== null) {
      entity.User_lastSeen = userEntity.lastSeen
    }

  entity.save()
  fillTotalEntity.save()

  addTradedToken(entity.takerAssetAddr, event.block.timestamp)
  addTradedToken(entity.makerAssetAddr, event.block.timestamp)

  const user = getUser(event.params.userAddr, event)!
  user.tradeCount += 1
  user.lastSeen = event.block.timestamp.toI32()
  user.save()
}
