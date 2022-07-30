/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { TestContract } from "../TestContract";

export class TestContract__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _username: BytesLike,
    _password: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestContract> {
    return super.deploy(
      _username,
      _password,
      overrides || {}
    ) as Promise<TestContract>;
  }
  getDeployTransaction(
    _username: BytesLike,
    _password: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_username, _password, overrides || {});
  }
  attach(address: string): TestContract {
    return super.attach(address) as TestContract;
  }
  connect(signer: Signer): TestContract__factory {
    return super.connect(signer) as TestContract__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestContract {
    return new Contract(address, _abi, signerOrProvider) as TestContract;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_password",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060405160a538038060a5833981016040819052602a916037565b6000919091556001556059565b600080604083850312156048578182fd5b505080516020909101519092909150565b603f8060666000396000f3fe6080604052600080fdfea26469706673582212200454d079f2f1695dbb10164ec32f9e2b886e2cd9aa3b07699becc3d86f68ec3764736f6c63430008000033";
