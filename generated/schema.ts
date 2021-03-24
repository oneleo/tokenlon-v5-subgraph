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

export class BuyBack extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BuyBack entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BuyBack entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BuyBack", id.toString(), this);
  }

  static load(id: string): BuyBack | null {
    return store.get("BuyBack", id) as BuyBack | null;
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

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
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

  get feeToken(): Bytes {
    let value = this.get("feeToken");
    return value.toBytes();
  }

  set feeToken(value: Bytes) {
    this.set("feeToken", Value.fromBytes(value));
  }

  get feeTokenAmount(): BigInt {
    let value = this.get("feeTokenAmount");
    return value.toBigInt();
  }

  set feeTokenAmount(value: BigInt) {
    this.set("feeTokenAmount", Value.fromBigInt(value));
  }

  get swappedLonAmount(): BigInt {
    let value = this.get("swappedLonAmount");
    return value.toBigInt();
  }

  set swappedLonAmount(value: BigInt) {
    this.set("swappedLonAmount", Value.fromBigInt(value));
  }

  get LFactor(): BigInt {
    let value = this.get("LFactor");
    return value.toBigInt();
  }

  set LFactor(value: BigInt) {
    this.set("LFactor", Value.fromBigInt(value));
  }

  get RFactor(): BigInt {
    let value = this.get("RFactor");
    return value.toBigInt();
  }

  set RFactor(value: BigInt) {
    this.set("RFactor", Value.fromBigInt(value));
  }

  get minBuy(): BigInt {
    let value = this.get("minBuy");
    return value.toBigInt();
  }

  set minBuy(value: BigInt) {
    this.set("minBuy", Value.fromBigInt(value));
  }

  get maxBuy(): BigInt {
    let value = this.get("maxBuy");
    return value.toBigInt();
  }

  set maxBuy(value: BigInt) {
    this.set("maxBuy", Value.fromBigInt(value));
  }
}

export class DistributeLon extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DistributeLon entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DistributeLon entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DistributeLon", id.toString(), this);
  }

  static load(id: string): DistributeLon | null {
    return store.get("DistributeLon", id) as DistributeLon | null;
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

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
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

  get treasuryAmount(): BigInt {
    let value = this.get("treasuryAmount");
    return value.toBigInt();
  }

  set treasuryAmount(value: BigInt) {
    this.set("treasuryAmount", Value.fromBigInt(value));
  }

  get lonStakingAmount(): BigInt {
    let value = this.get("lonStakingAmount");
    return value.toBigInt();
  }

  set lonStakingAmount(value: BigInt) {
    this.set("lonStakingAmount", Value.fromBigInt(value));
  }
}

export class MintLon extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MintLon entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MintLon entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MintLon", id.toString(), this);
  }

  static load(id: string): MintLon | null {
    return store.get("MintLon", id) as MintLon | null;
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

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
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

  get mintedAmount(): BigInt {
    let value = this.get("mintedAmount");
    return value.toBigInt();
  }

  set mintedAmount(value: BigInt) {
    this.set("mintedAmount", Value.fromBigInt(value));
  }
}

export class BuyBackDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BuyBackDayData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BuyBackDayData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BuyBackDayData", id.toString(), this);
  }

  static load(id: string): BuyBackDayData | null {
    return store.get("BuyBackDayData", id) as BuyBackDayData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get dailyTreasuryAmount(): BigInt {
    let value = this.get("dailyTreasuryAmount");
    return value.toBigInt();
  }

  set dailyTreasuryAmount(value: BigInt) {
    this.set("dailyTreasuryAmount", Value.fromBigInt(value));
  }

  get dailyLonStakingAmount(): BigInt {
    let value = this.get("dailyLonStakingAmount");
    return value.toBigInt();
  }

  set dailyLonStakingAmount(value: BigInt) {
    this.set("dailyLonStakingAmount", Value.fromBigInt(value));
  }

  get dailyMintedAmount(): BigInt {
    let value = this.get("dailyMintedAmount");
    return value.toBigInt();
  }

  set dailyMintedAmount(value: BigInt) {
    this.set("dailyMintedAmount", Value.fromBigInt(value));
  }
}

export class BuyBackTotal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BuyBackTotal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BuyBackTotal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BuyBackTotal", id.toString(), this);
  }

  static load(id: string): BuyBackTotal | null {
    return store.get("BuyBackTotal", id) as BuyBackTotal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalTreasuryAmount(): BigInt {
    let value = this.get("totalTreasuryAmount");
    return value.toBigInt();
  }

  set totalTreasuryAmount(value: BigInt) {
    this.set("totalTreasuryAmount", Value.fromBigInt(value));
  }

  get totalLonStakingAmount(): BigInt {
    let value = this.get("totalLonStakingAmount");
    return value.toBigInt();
  }

  set totalLonStakingAmount(value: BigInt) {
    this.set("totalLonStakingAmount", Value.fromBigInt(value));
  }

  get totalMintedAmount(): BigInt {
    let value = this.get("totalMintedAmount");
    return value.toBigInt();
  }

  set totalMintedAmount(value: BigInt) {
    this.set("totalMintedAmount", Value.fromBigInt(value));
  }
}

export class Staked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Staked entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Staked entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Staked", id.toString(), this);
  }

  static load(id: string): Staked | null {
    return store.get("Staked", id) as Staked | null;
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

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
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

  get date(): i32 {
    let value = this.get("date");
    return value.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get share(): BigInt {
    let value = this.get("share");
    return value.toBigInt();
  }

  set share(value: BigInt) {
    this.set("share", Value.fromBigInt(value));
  }
}

export class Redeem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Redeem entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Redeem entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Redeem", id.toString(), this);
  }

  static load(id: string): Redeem | null {
    return store.get("Redeem", id) as Redeem | null;
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

  get transactionHash(): string {
    let value = this.get("transactionHash");
    return value.toString();
  }

  set transactionHash(value: string) {
    this.set("transactionHash", Value.fromString(value));
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

  get date(): i32 {
    let value = this.get("date");
    return value.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get share(): BigInt {
    let value = this.get("share");
    return value.toBigInt();
  }

  set share(value: BigInt) {
    this.set("share", Value.fromBigInt(value));
  }
}

export class StakedDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakedDayData entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakedDayData entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakedDayData", id.toString(), this);
  }

  static load(id: string): StakedDayData | null {
    return store.get("StakedDayData", id) as StakedDayData | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get dailyStakedAmount(): BigInt {
    let value = this.get("dailyStakedAmount");
    return value.toBigInt();
  }

  set dailyStakedAmount(value: BigInt) {
    this.set("dailyStakedAmount", Value.fromBigInt(value));
  }

  get apy(): BigDecimal {
    let value = this.get("apy");
    return value.toBigDecimal();
  }

  set apy(value: BigDecimal) {
    this.set("apy", Value.fromBigDecimal(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }
}

export class StakedChange extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakedChange entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakedChange entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakedChange", id.toString(), this);
  }

  static load(id: string): StakedChange | null {
    return store.get("StakedChange", id) as StakedChange | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get stakedAmount(): BigInt {
    let value = this.get("stakedAmount");
    return value.toBigInt();
  }

  set stakedAmount(value: BigInt) {
    this.set("stakedAmount", Value.fromBigInt(value));
  }

  get apy(): BigDecimal {
    let value = this.get("apy");
    return value.toBigDecimal();
  }

  set apy(value: BigDecimal) {
    this.set("apy", Value.fromBigDecimal(value));
  }

  get added(): boolean {
    let value = this.get("added");
    return value.toBoolean();
  }

  set added(value: boolean) {
    this.set("added", Value.fromBoolean(value));
  }
}

export class StakedTotal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakedTotal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakedTotal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakedTotal", id.toString(), this);
  }

  static load(id: string): StakedTotal | null {
    return store.get("StakedTotal", id) as StakedTotal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalStakedAmount(): BigInt {
    let value = this.get("totalStakedAmount");
    return value.toBigInt();
  }

  set totalStakedAmount(value: BigInt) {
    this.set("totalStakedAmount", Value.fromBigInt(value));
  }
}
