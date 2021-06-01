// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AllowTransfer extends ethereum.Event {
  get params(): AllowTransfer__Params {
    return new AllowTransfer__Params(this);
  }
}

export class AllowTransfer__Params {
  _event: AllowTransfer;

  constructor(event: AllowTransfer) {
    this._event = event;
  }

  get spender(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DepositETH extends ethereum.Event {
  get params(): DepositETH__Params {
    return new DepositETH__Params(this);
  }
}

export class DepositETH__Params {
  _event: DepositETH;

  constructor(event: DepositETH) {
    this._event = event;
  }

  get ethBalance(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class DisallowTransfer extends ethereum.Event {
  get params(): DisallowTransfer__Params {
    return new DisallowTransfer__Params(this);
  }
}

export class DisallowTransfer__Params {
  _event: DisallowTransfer;

  constructor(event: DisallowTransfer) {
    this._event = event;
  }

  get spender(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetSubsidyFactor extends ethereum.Event {
  get params(): SetSubsidyFactor__Params {
    return new SetSubsidyFactor__Params(this);
  }
}

export class SetSubsidyFactor__Params {
  _event: SetSubsidyFactor;

  constructor(event: SetSubsidyFactor) {
    this._event = event;
  }

  get newSubisdyFactor(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Swapped extends ethereum.Event {
  get params(): Swapped__Params {
    return new Swapped__Params(this);
  }
}

export class Swapped__Params {
  _event: Swapped;

  constructor(event: Swapped) {
    this._event = event;
  }

  get param0(): SwappedParam0Struct {
    return this._event.parameters[0].value.toTuple() as SwappedParam0Struct;
  }

  get order(): SwappedOrderStruct {
    return this._event.parameters[1].value.toTuple() as SwappedOrderStruct;
  }
}

export class SwappedParam0Struct extends ethereum.Tuple {
  get source(): string {
    return this[0].toString();
  }

  get transactionHash(): Bytes {
    return this[1].toBytes();
  }

  get settleAmount(): BigInt {
    return this[2].toBigInt();
  }

  get receivedAmount(): BigInt {
    return this[3].toBigInt();
  }

  get feeFactor(): i32 {
    return this[4].toI32();
  }

  get subsidyFactor(): i32 {
    return this[5].toI32();
  }
}

export class SwappedOrderStruct extends ethereum.Tuple {
  get makerAddr(): Address {
    return this[0].toAddress();
  }

  get takerAssetAddr(): Address {
    return this[1].toAddress();
  }

  get makerAssetAddr(): Address {
    return this[2].toAddress();
  }

  get takerAssetAmount(): BigInt {
    return this[3].toBigInt();
  }

  get makerAssetAmount(): BigInt {
    return this[4].toBigInt();
  }

  get userAddr(): Address {
    return this[5].toAddress();
  }

  get receiverAddr(): Address {
    return this[6].toAddress();
  }

  get salt(): BigInt {
    return this[7].toBigInt();
  }

  get deadline(): BigInt {
    return this[8].toBigInt();
  }
}

export class Swapped1 extends ethereum.Event {
  get params(): Swapped1__Params {
    return new Swapped1__Params(this);
  }
}

export class Swapped1__Params {
  _event: Swapped1;

  constructor(event: Swapped1) {
    this._event = event;
  }

  get source(): string {
    return this._event.parameters[0].value.toString();
  }

  get transactionHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get userAddr(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get takerAssetAddr(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get takerAssetAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get makerAddr(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get makerAssetAddr(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get makerAssetAmount(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get receiverAddr(): Address {
    return this._event.parameters[8].value.toAddress();
  }

  get settleAmount(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }

  get receivedAmount(): BigInt {
    return this._event.parameters[10].value.toBigInt();
  }

  get feeFactor(): i32 {
    return this._event.parameters[11].value.toI32();
  }

  get subsidyFactor(): i32 {
    return this._event.parameters[12].value.toI32();
  }
}

export class TransferOwnership extends ethereum.Event {
  get params(): TransferOwnership__Params {
    return new TransferOwnership__Params(this);
  }
}

export class TransferOwnership__Params {
  _event: TransferOwnership;

  constructor(event: TransferOwnership) {
    this._event = event;
  }

  get newOperator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class UpgradeSpender extends ethereum.Event {
  get params(): UpgradeSpender__Params {
    return new UpgradeSpender__Params(this);
  }
}

export class UpgradeSpender__Params {
  _event: UpgradeSpender;

  constructor(event: UpgradeSpender) {
    this._event = event;
  }

  get newSpender(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class AMMWrapperWithPath extends ethereum.SmartContract {
  static bind(address: Address): AMMWrapperWithPath {
    return new AMMWrapperWithPath("AMMWrapperWithPath", address);
  }

  EIP191_HEADER(): string {
    let result = super.call("EIP191_HEADER", "EIP191_HEADER():(string)", []);

    return result[0].toString();
  }

  try_EIP191_HEADER(): ethereum.CallResult<string> {
    let result = super.tryCall("EIP191_HEADER", "EIP191_HEADER():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  EIP712_DOMAIN_NAME(): string {
    let result = super.call(
      "EIP712_DOMAIN_NAME",
      "EIP712_DOMAIN_NAME():(string)",
      []
    );

    return result[0].toString();
  }

  try_EIP712_DOMAIN_NAME(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "EIP712_DOMAIN_NAME",
      "EIP712_DOMAIN_NAME():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  EIP712_DOMAIN_SEPARATOR(): Bytes {
    let result = super.call(
      "EIP712_DOMAIN_SEPARATOR",
      "EIP712_DOMAIN_SEPARATOR():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_EIP712_DOMAIN_SEPARATOR(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EIP712_DOMAIN_SEPARATOR",
      "EIP712_DOMAIN_SEPARATOR():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  EIP712_DOMAIN_VERSION(): string {
    let result = super.call(
      "EIP712_DOMAIN_VERSION",
      "EIP712_DOMAIN_VERSION():(string)",
      []
    );

    return result[0].toString();
  }

  try_EIP712_DOMAIN_VERSION(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "EIP712_DOMAIN_VERSION",
      "EIP712_DOMAIN_VERSION():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  SUSHISWAP_ROUTER_ADDRESS(): Address {
    let result = super.call(
      "SUSHISWAP_ROUTER_ADDRESS",
      "SUSHISWAP_ROUTER_ADDRESS():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_SUSHISWAP_ROUTER_ADDRESS(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "SUSHISWAP_ROUTER_ADDRESS",
      "SUSHISWAP_ROUTER_ADDRESS():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  TRADE_WITH_PERMIT_TYPEHASH(): Bytes {
    let result = super.call(
      "TRADE_WITH_PERMIT_TYPEHASH",
      "TRADE_WITH_PERMIT_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_TRADE_WITH_PERMIT_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "TRADE_WITH_PERMIT_TYPEHASH",
      "TRADE_WITH_PERMIT_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  UNISWAP_V2_ROUTER_02_ADDRESS(): Address {
    let result = super.call(
      "UNISWAP_V2_ROUTER_02_ADDRESS",
      "UNISWAP_V2_ROUTER_02_ADDRESS():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_UNISWAP_V2_ROUTER_02_ADDRESS(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "UNISWAP_V2_ROUTER_02_ADDRESS",
      "UNISWAP_V2_ROUTER_02_ADDRESS():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  UNISWAP_V3_ROUTER_ADDRESS(): Address {
    let result = super.call(
      "UNISWAP_V3_ROUTER_ADDRESS",
      "UNISWAP_V3_ROUTER_ADDRESS():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_UNISWAP_V3_ROUTER_ADDRESS(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "UNISWAP_V3_ROUTER_ADDRESS",
      "UNISWAP_V3_ROUTER_ADDRESS():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isValidSignature(
    _signerAddress: Address,
    _hash: Bytes,
    _data: Bytes,
    _sig: Bytes
  ): boolean {
    let result = super.call(
      "isValidSignature",
      "isValidSignature(address,bytes32,bytes,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_signerAddress),
        ethereum.Value.fromFixedBytes(_hash),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_sig)
      ]
    );

    return result[0].toBoolean();
  }

  try_isValidSignature(
    _signerAddress: Address,
    _hash: Bytes,
    _data: Bytes,
    _sig: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isValidSignature",
      "isValidSignature(address,bytes32,bytes,bytes):(bool)",
      [
        ethereum.Value.fromAddress(_signerAddress),
        ethereum.Value.fromFixedBytes(_hash),
        ethereum.Value.fromBytes(_data),
        ethereum.Value.fromBytes(_sig)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  operator(): Address {
    let result = super.call("operator", "operator():(address)", []);

    return result[0].toAddress();
  }

  try_operator(): ethereum.CallResult<Address> {
    let result = super.tryCall("operator", "operator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  permStorage(): Address {
    let result = super.call("permStorage", "permStorage():(address)", []);

    return result[0].toAddress();
  }

  try_permStorage(): ethereum.CallResult<Address> {
    let result = super.tryCall("permStorage", "permStorage():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  spender(): Address {
    let result = super.call("spender", "spender():(address)", []);

    return result[0].toAddress();
  }

  try_spender(): ethereum.CallResult<Address> {
    let result = super.tryCall("spender", "spender():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  subsidyFactor(): BigInt {
    let result = super.call("subsidyFactor", "subsidyFactor():(uint256)", []);

    return result[0].toBigInt();
  }

  try_subsidyFactor(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "subsidyFactor",
      "subsidyFactor():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userProxy(): Address {
    let result = super.call("userProxy", "userProxy():(address)", []);

    return result[0].toAddress();
  }

  try_userProxy(): ethereum.CallResult<Address> {
    let result = super.tryCall("userProxy", "userProxy():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  version(): string {
    let result = super.call("version", "version():(string)", []);

    return result[0].toString();
  }

  try_version(): ethereum.CallResult<string> {
    let result = super.tryCall("version", "version():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  weth(): Address {
    let result = super.call("weth", "weth():(address)", []);

    return result[0].toAddress();
  }

  try_weth(): ethereum.CallResult<Address> {
    let result = super.tryCall("weth", "weth():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _subsidyFactor(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _userProxy(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _spender(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _permStorage(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _weth(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CloseAllowanceCall extends ethereum.Call {
  get inputs(): CloseAllowanceCall__Inputs {
    return new CloseAllowanceCall__Inputs(this);
  }

  get outputs(): CloseAllowanceCall__Outputs {
    return new CloseAllowanceCall__Outputs(this);
  }
}

export class CloseAllowanceCall__Inputs {
  _call: CloseAllowanceCall;

  constructor(call: CloseAllowanceCall) {
    this._call = call;
  }

  get _tokenList(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _spender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CloseAllowanceCall__Outputs {
  _call: CloseAllowanceCall;

  constructor(call: CloseAllowanceCall) {
    this._call = call;
  }
}

export class DepositETHCall extends ethereum.Call {
  get inputs(): DepositETHCall__Inputs {
    return new DepositETHCall__Inputs(this);
  }

  get outputs(): DepositETHCall__Outputs {
    return new DepositETHCall__Outputs(this);
  }
}

export class DepositETHCall__Inputs {
  _call: DepositETHCall;

  constructor(call: DepositETHCall) {
    this._call = call;
  }
}

export class DepositETHCall__Outputs {
  _call: DepositETHCall;

  constructor(call: DepositETHCall) {
    this._call = call;
  }
}

export class SetAllowanceCall extends ethereum.Call {
  get inputs(): SetAllowanceCall__Inputs {
    return new SetAllowanceCall__Inputs(this);
  }

  get outputs(): SetAllowanceCall__Outputs {
    return new SetAllowanceCall__Outputs(this);
  }
}

export class SetAllowanceCall__Inputs {
  _call: SetAllowanceCall;

  constructor(call: SetAllowanceCall) {
    this._call = call;
  }

  get _tokenList(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _spender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetAllowanceCall__Outputs {
  _call: SetAllowanceCall;

  constructor(call: SetAllowanceCall) {
    this._call = call;
  }
}

export class SetSubsidyFactorCall extends ethereum.Call {
  get inputs(): SetSubsidyFactorCall__Inputs {
    return new SetSubsidyFactorCall__Inputs(this);
  }

  get outputs(): SetSubsidyFactorCall__Outputs {
    return new SetSubsidyFactorCall__Outputs(this);
  }
}

export class SetSubsidyFactorCall__Inputs {
  _call: SetSubsidyFactorCall;

  constructor(call: SetSubsidyFactorCall) {
    this._call = call;
  }

  get _subsidyFactor(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetSubsidyFactorCall__Outputs {
  _call: SetSubsidyFactorCall;

  constructor(call: SetSubsidyFactorCall) {
    this._call = call;
  }
}

export class TradeCall extends ethereum.Call {
  get inputs(): TradeCall__Inputs {
    return new TradeCall__Inputs(this);
  }

  get outputs(): TradeCall__Outputs {
    return new TradeCall__Outputs(this);
  }
}

export class TradeCall__Inputs {
  _call: TradeCall;

  constructor(call: TradeCall) {
    this._call = call;
  }

  get _makerAddr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _takerAssetAddr(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _makerAssetAddr(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _takerAssetAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _makerAssetAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _feeFactor(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _userAddr(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _receiverAddr(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get _salt(): BigInt {
    return this._call.inputValues[8].value.toBigInt();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }

  get _sig(): Bytes {
    return this._call.inputValues[10].value.toBytes();
  }
}

export class TradeCall__Outputs {
  _call: TradeCall;

  constructor(call: TradeCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class Trade1Call extends ethereum.Call {
  get inputs(): Trade1Call__Inputs {
    return new Trade1Call__Inputs(this);
  }

  get outputs(): Trade1Call__Outputs {
    return new Trade1Call__Outputs(this);
  }
}

export class Trade1Call__Inputs {
  _call: Trade1Call;

  constructor(call: Trade1Call) {
    this._call = call;
  }

  get _order(): Trade1Call_orderStruct {
    return this._call.inputValues[0].value.toTuple() as Trade1Call_orderStruct;
  }

  get _feeFactor(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _sig(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get _makerSpecificData(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get _path(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }
}

export class Trade1Call__Outputs {
  _call: Trade1Call;

  constructor(call: Trade1Call) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class Trade1Call_orderStruct extends ethereum.Tuple {
  get makerAddr(): Address {
    return this[0].toAddress();
  }

  get takerAssetAddr(): Address {
    return this[1].toAddress();
  }

  get makerAssetAddr(): Address {
    return this[2].toAddress();
  }

  get takerAssetAmount(): BigInt {
    return this[3].toBigInt();
  }

  get makerAssetAmount(): BigInt {
    return this[4].toBigInt();
  }

  get userAddr(): Address {
    return this[5].toAddress();
  }

  get receiverAddr(): Address {
    return this[6].toAddress();
  }

  get salt(): BigInt {
    return this[7].toBigInt();
  }

  get deadline(): BigInt {
    return this[8].toBigInt();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _newOperator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpgradeSpenderCall extends ethereum.Call {
  get inputs(): UpgradeSpenderCall__Inputs {
    return new UpgradeSpenderCall__Inputs(this);
  }

  get outputs(): UpgradeSpenderCall__Outputs {
    return new UpgradeSpenderCall__Outputs(this);
  }
}

export class UpgradeSpenderCall__Inputs {
  _call: UpgradeSpenderCall;

  constructor(call: UpgradeSpenderCall) {
    this._call = call;
  }

  get _newSpender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeSpenderCall__Outputs {
  _call: UpgradeSpenderCall;

  constructor(call: UpgradeSpenderCall) {
    this._call = call;
  }
}
