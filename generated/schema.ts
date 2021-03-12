// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class FillOrder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FillOrder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FillOrder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FillOrder", id.toString(), this);
  }

  static load(id: string): FillOrder | null {
    return store.get("FillOrder", id) as FillOrder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get txNumber(): BigInt {
    let value = this.get("txNumber");
    return value.toBigInt();
  }

  set txNumber(value: BigInt) {
    this.set("txNumber", Value.fromBigInt(value));
  }

  get source(): string {
    let value = this.get("source");
    return value.toString();
  }

  set source(value: string) {
    this.set("source", Value.fromString(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get executeTxHash(): Bytes {
    let value = this.get("executeTxHash");
    return value.toBytes();
  }

  set executeTxHash(value: Bytes) {
    this.set("executeTxHash", Value.fromBytes(value));
  }

  get orderHash(): Bytes {
    let value = this.get("orderHash");
    return value.toBytes();
  }

  set orderHash(value: Bytes) {
    this.set("orderHash", Value.fromBytes(value));
  }

  get userAddr(): Bytes {
    let value = this.get("userAddr");
    return value.toBytes();
  }

  set userAddr(value: Bytes) {
    this.set("userAddr", Value.fromBytes(value));
  }

  get takerAssetAddr(): Bytes {
    let value = this.get("takerAssetAddr");
    return value.toBytes();
  }

  set takerAssetAddr(value: Bytes) {
    this.set("takerAssetAddr", Value.fromBytes(value));
  }

  get takerAssetAmount(): BigInt {
    let value = this.get("takerAssetAmount");
    return value.toBigInt();
  }

  set takerAssetAmount(value: BigInt) {
    this.set("takerAssetAmount", Value.fromBigInt(value));
  }

  get makerAddr(): Bytes {
    let value = this.get("makerAddr");
    return value.toBytes();
  }

  set makerAddr(value: Bytes) {
    this.set("makerAddr", Value.fromBytes(value));
  }

  get makerAssetAddr(): Bytes {
    let value = this.get("makerAssetAddr");
    return value.toBytes();
  }

  set makerAssetAddr(value: Bytes) {
    this.set("makerAssetAddr", Value.fromBytes(value));
  }

  get makerAssetAmount(): BigInt {
    let value = this.get("makerAssetAmount");
    return value.toBigInt();
  }

  set makerAssetAmount(value: BigInt) {
    this.set("makerAssetAmount", Value.fromBigInt(value));
  }

  get receiverAddr(): Bytes {
    let value = this.get("receiverAddr");
    return value.toBytes();
  }

  set receiverAddr(value: Bytes) {
    this.set("receiverAddr", Value.fromBytes(value));
  }

  get settleAmount(): BigInt {
    let value = this.get("settleAmount");
    return value.toBigInt();
  }

  set settleAmount(value: BigInt) {
    this.set("settleAmount", Value.fromBigInt(value));
  }

  get feeFactor(): i32 {
    let value = this.get("feeFactor");
    return value.toI32();
  }

  set feeFactor(value: i32) {
    this.set("feeFactor", Value.fromI32(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get logIndex(): BigInt {
    let value = this.get("logIndex");
    return value.toBigInt();
  }

  set logIndex(value: BigInt) {
    this.set("logIndex", Value.fromBigInt(value));
  }

  get eventAddr(): Bytes {
    let value = this.get("eventAddr");
    return value.toBytes();
  }

  set eventAddr(value: Bytes) {
    this.set("eventAddr", Value.fromBytes(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }
}

export class Swapped extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Swapped entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Swapped entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Swapped", id.toString(), this);
  }

  static load(id: string): Swapped | null {
    return store.get("Swapped", id) as Swapped | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get txNumber(): BigInt {
    let value = this.get("txNumber");
    return value.toBigInt();
  }

  set txNumber(value: BigInt) {
    this.set("txNumber", Value.fromBigInt(value));
  }

  get source(): string {
    let value = this.get("source");
    return value.toString();
  }

  set source(value: string) {
    this.set("source", Value.fromString(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get executeTxHash(): Bytes {
    let value = this.get("executeTxHash");
    return value.toBytes();
  }

  set executeTxHash(value: Bytes) {
    this.set("executeTxHash", Value.fromBytes(value));
  }

  get userAddr(): Bytes {
    let value = this.get("userAddr");
    return value.toBytes();
  }

  set userAddr(value: Bytes) {
    this.set("userAddr", Value.fromBytes(value));
  }

  get takerAssetAddr(): Bytes {
    let value = this.get("takerAssetAddr");
    return value.toBytes();
  }

  set takerAssetAddr(value: Bytes) {
    this.set("takerAssetAddr", Value.fromBytes(value));
  }

  get takerAssetAmount(): BigInt {
    let value = this.get("takerAssetAmount");
    return value.toBigInt();
  }

  set takerAssetAmount(value: BigInt) {
    this.set("takerAssetAmount", Value.fromBigInt(value));
  }

  get makerAddr(): Bytes {
    let value = this.get("makerAddr");
    return value.toBytes();
  }

  set makerAddr(value: Bytes) {
    this.set("makerAddr", Value.fromBytes(value));
  }

  get makerAssetAddr(): Bytes {
    let value = this.get("makerAssetAddr");
    return value.toBytes();
  }

  set makerAssetAddr(value: Bytes) {
    this.set("makerAssetAddr", Value.fromBytes(value));
  }

  get makerAssetAmount(): BigInt {
    let value = this.get("makerAssetAmount");
    return value.toBigInt();
  }

  set makerAssetAmount(value: BigInt) {
    this.set("makerAssetAmount", Value.fromBigInt(value));
  }

  get receiverAddr(): Bytes {
    let value = this.get("receiverAddr");
    return value.toBytes();
  }

  set receiverAddr(value: Bytes) {
    this.set("receiverAddr", Value.fromBytes(value));
  }

  get settleAmount(): BigInt {
    let value = this.get("settleAmount");
    return value.toBigInt();
  }

  set settleAmount(value: BigInt) {
    this.set("settleAmount", Value.fromBigInt(value));
  }

  get receivedAmount(): BigInt {
    let value = this.get("receivedAmount");
    return value.toBigInt();
  }

  set receivedAmount(value: BigInt) {
    this.set("receivedAmount", Value.fromBigInt(value));
  }

  get feeFactor(): i32 {
    let value = this.get("feeFactor");
    return value.toI32();
  }

  set feeFactor(value: i32) {
    this.set("feeFactor", Value.fromI32(value));
  }

  get subsidyFactor(): i32 {
    let value = this.get("subsidyFactor");
    return value.toI32();
  }

  set subsidyFactor(value: i32) {
    this.set("subsidyFactor", Value.fromI32(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get logIndex(): BigInt {
    let value = this.get("logIndex");
    return value.toBigInt();
  }

  set logIndex(value: BigInt) {
    this.set("logIndex", Value.fromBigInt(value));
  }

  get eventAddr(): Bytes {
    let value = this.get("eventAddr");
    return value.toBytes();
  }

  set eventAddr(value: Bytes) {
    this.set("eventAddr", Value.fromBytes(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }
}

export class SwappedTotal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SwappedTotal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SwappedTotal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SwappedTotal", id.toString(), this);
  }

  static load(id: string): SwappedTotal | null {
    return store.get("SwappedTotal", id) as SwappedTotal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get total(): BigInt {
    let value = this.get("total");
    return value.toBigInt();
  }

  set total(value: BigInt) {
    this.set("total", Value.fromBigInt(value));
  }
}

export class FillOrderTotal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FillOrderTotal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FillOrderTotal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FillOrderTotal", id.toString(), this);
  }

  static load(id: string): FillOrderTotal | null {
    return store.get("FillOrderTotal", id) as FillOrderTotal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get total(): BigInt {
    let value = this.get("total");
    return value.toBigInt();
  }

  set total(value: BigInt) {
    this.set("total", Value.fromBigInt(value));
  }
}

export class SubsidizedSwapped extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save SubsidizedSwapped entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save SubsidizedSwapped entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("SubsidizedSwapped", id.toString(), this);
  }

  static load(id: string): SubsidizedSwapped | null {
    return store.get("SubsidizedSwapped", id) as SubsidizedSwapped | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get source(): string {
    let value = this.get("source");
    return value.toString();
  }

  set source(value: string) {
    this.set("source", Value.fromString(value));
  }

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
  }

  get executeTxHash(): Bytes {
    let value = this.get("executeTxHash");
    return value.toBytes();
  }

  set executeTxHash(value: Bytes) {
    this.set("executeTxHash", Value.fromBytes(value));
  }

  get userAddr(): Bytes {
    let value = this.get("userAddr");
    return value.toBytes();
  }

  set userAddr(value: Bytes) {
    this.set("userAddr", Value.fromBytes(value));
  }

  get takerAssetAddr(): Bytes {
    let value = this.get("takerAssetAddr");
    return value.toBytes();
  }

  set takerAssetAddr(value: Bytes) {
    this.set("takerAssetAddr", Value.fromBytes(value));
  }

  get takerAssetAmount(): BigInt {
    let value = this.get("takerAssetAmount");
    return value.toBigInt();
  }

  set takerAssetAmount(value: BigInt) {
    this.set("takerAssetAmount", Value.fromBigInt(value));
  }

  get makerAddr(): Bytes {
    let value = this.get("makerAddr");
    return value.toBytes();
  }

  set makerAddr(value: Bytes) {
    this.set("makerAddr", Value.fromBytes(value));
  }

  get makerAssetAddr(): Bytes {
    let value = this.get("makerAssetAddr");
    return value.toBytes();
  }

  set makerAssetAddr(value: Bytes) {
    this.set("makerAssetAddr", Value.fromBytes(value));
  }

  get makerAssetAmount(): BigInt {
    let value = this.get("makerAssetAmount");
    return value.toBigInt();
  }

  set makerAssetAmount(value: BigInt) {
    this.set("makerAssetAmount", Value.fromBigInt(value));
  }

  get receiverAddr(): Bytes {
    let value = this.get("receiverAddr");
    return value.toBytes();
  }

  set receiverAddr(value: Bytes) {
    this.set("receiverAddr", Value.fromBytes(value));
  }

  get settleAmount(): BigInt {
    let value = this.get("settleAmount");
    return value.toBigInt();
  }

  set settleAmount(value: BigInt) {
    this.set("settleAmount", Value.fromBigInt(value));
  }

  get receivedAmount(): BigInt {
    let value = this.get("receivedAmount");
    return value.toBigInt();
  }

  set receivedAmount(value: BigInt) {
    this.set("receivedAmount", Value.fromBigInt(value));
  }

  get feeFactor(): i32 {
    let value = this.get("feeFactor");
    return value.toI32();
  }

  set feeFactor(value: i32) {
    this.set("feeFactor", Value.fromI32(value));
  }

  get subsidyFactor(): i32 {
    let value = this.get("subsidyFactor");
    return value.toI32();
  }

  set subsidyFactor(value: i32) {
    this.set("subsidyFactor", Value.fromI32(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get logIndex(): BigInt {
    let value = this.get("logIndex");
    return value.toBigInt();
  }

  set logIndex(value: BigInt) {
    this.set("logIndex", Value.fromBigInt(value));
  }

  get eventAddr(): Bytes {
    let value = this.get("eventAddr");
    return value.toBytes();
  }

  set eventAddr(value: Bytes) {
    this.set("eventAddr", Value.fromBytes(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }
}
