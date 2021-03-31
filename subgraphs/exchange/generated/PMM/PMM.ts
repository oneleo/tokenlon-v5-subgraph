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

export class FillOrder extends ethereum.Event {
  get params(): FillOrder__Params {
    return new FillOrder__Params(this);
  }
}

export class FillOrder__Params {
  _event: FillOrder;

  constructor(event: FillOrder) {
    this._event = event;
  }

  get source(): string {
    return this._event.parameters[0].value.toString();
  }

  get transactionHash(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get orderHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get userAddr(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get takerAssetAddr(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get takerAssetAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get makerAddr(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get makerAssetAddr(): Address {
    return this._event.parameters[7].value.toAddress();
  }

  get makerAssetAmount(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get receiverAddr(): Address {
    return this._event.parameters[9].value.toAddress();
  }

  get settleAmount(): BigInt {
    return this._event.parameters[10].value.toBigInt();
  }

  get feeFactor(): i32 {
    return this._event.parameters[11].value.toI32();
  }
}

export class PMM extends ethereum.SmartContract {
  static bind(address: Address): PMM {
    return new PMM("PMM", address);
  }

  EIP712_DOMAIN_HASH(): Bytes {
    let result = super.call(
      "EIP712_DOMAIN_HASH",
      "EIP712_DOMAIN_HASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_EIP712_DOMAIN_HASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EIP712_DOMAIN_HASH",
      "EIP712_DOMAIN_HASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  SOURCE(): string {
    let result = super.call("SOURCE", "SOURCE():(string)", []);

    return result[0].toString();
  }

  try_SOURCE(): ethereum.CallResult<string> {
    let result = super.tryCall("SOURCE", "SOURCE():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
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

  zeroExchange(): Address {
    let result = super.call("zeroExchange", "zeroExchange():(address)", []);

    return result[0].toAddress();
  }

  try_zeroExchange(): ethereum.CallResult<Address> {
    let result = super.tryCall("zeroExchange", "zeroExchange():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  zxERC20Proxy(): Address {
    let result = super.call("zxERC20Proxy", "zxERC20Proxy():(address)", []);

    return result[0].toAddress();
  }

  try_zxERC20Proxy(): ethereum.CallResult<Address> {
    let result = super.tryCall("zxERC20Proxy", "zxERC20Proxy():(address)", []);
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

  get _userProxy(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _spender(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _permStorage(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _zeroExchange(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _zxERC20Proxy(): Address {
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

export class FillCall extends ethereum.Call {
  get inputs(): FillCall__Inputs {
    return new FillCall__Inputs(this);
  }

  get outputs(): FillCall__Outputs {
    return new FillCall__Outputs(this);
  }
}

export class FillCall__Inputs {
  _call: FillCall;

  constructor(call: FillCall) {
    this._call = call;
  }

  get userSalt(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get userSignature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class FillCall__Outputs {
  _call: FillCall;

  constructor(call: FillCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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