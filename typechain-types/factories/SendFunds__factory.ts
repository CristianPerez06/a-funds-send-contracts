/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, PayableOverrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../common'
import type { SendFunds, SendFundsInterface } from '../SendFunds'

const _abi = [
  {
    inputs: [],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'NewTxn',
    type: 'event',
  },
  {
    inputs: [],
    name: 'getAllTxn',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'reciever',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'timestamp',
            type: 'uint256',
          },
        ],
        internalType: 'struct SendFunds.SentTransaction[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'sendFunds',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
] as const

const _bytecode =
  '0x608060405261004c6040518060400160405280600581526020017f68656c6c6f00000000000000000000000000000000000000000000000000000081525061005160201b61033b1760201c565b6101cb565b6100ed8160405160240161006591906101a9565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506100f060201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610153578082015181840152602081019050610138565b60008484015250505050565b6000601f19601f8301169050919050565b600061017b82610119565b6101858185610124565b9350610195818560208601610135565b61019e8161015f565b840191505092915050565b600060208201905081810360008301526101c38184610170565b905092915050565b610857806101da6000396000f3fe6080604052600436106100295760003560e01c80636f64234e1461002e578063b64040681461004a575b600080fd5b61004860048036038101906100439190610496565b610075565b005b34801561005657600080fd5b5061005f610272565b60405161006c91906105f7565b60405180910390f35b478111156100b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100af90610676565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516100de906106c7565b60006040518083038185875af1925050503d806000811461011b576040519150601f19603f3d011682016040523d82523d6000602084013e610120565b606091505b5050905080610164576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015b90610728565b60405180910390fd5b600060405180606001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002015550508273ffffffffffffffffffffffffffffffffffffffff167f3e5afcf1dfcee04bbd585151295a36df144bbd410d181c6d0fd16c449beb65ff8342604051610265929190610757565b60405180910390a2505050565b60606000805480602002602001604051908101604052809291908181526020016000905b8282101561033257838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152505081526020019060010190610296565b50505050905090565b6103d18160405160240161034f91906107ff565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506103d4565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061042d82610402565b9050919050565b61043d81610422565b811461044857600080fd5b50565b60008135905061045a81610434565b92915050565b6000819050919050565b61047381610460565b811461047e57600080fd5b50565b6000813590506104908161046a565b92915050565b600080604083850312156104ad576104ac6103fd565b5b60006104bb8582860161044b565b92505060206104cc85828601610481565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061050d82610402565b9050919050565b61051d81610502565b82525050565b61052c81610460565b82525050565b6060820160008201516105486000850182610514565b50602082015161055b6020850182610523565b50604082015161056e6040850182610523565b50505050565b60006105808383610532565b60608301905092915050565b6000602082019050919050565b60006105a4826104d6565b6105ae81856104e1565b93506105b9836104f2565b8060005b838110156105ea5781516105d18882610574565b97506105dc8361058c565b9250506001810190506105bd565b5085935050505092915050565b600060208201905081810360008301526106118184610599565b905092915050565b600082825260208201905092915050565b7f6e6f7420656e6f7567682066756e647300000000000000000000000000000000600082015250565b6000610660601083610619565b915061066b8261062a565b602082019050919050565b6000602082019050818103600083015261068f81610653565b9050919050565b600081905092915050565b50565b60006106b1600083610696565b91506106bc826106a1565b600082019050919050565b60006106d2826106a4565b9150819050919050565b7f556e61626c6520746f2073656e64204574686572000000000000000000000000600082015250565b6000610712601483610619565b915061071d826106dc565b602082019050919050565b6000602082019050818103600083015261074181610705565b9050919050565b61075181610460565b82525050565b600060408201905061076c6000830185610748565b6107796020830184610748565b9392505050565b600081519050919050565b60005b838110156107a957808201518184015260208101905061078e565b60008484015250505050565b6000601f19601f8301169050919050565b60006107d182610780565b6107db8185610619565b93506107eb81856020860161078b565b6107f4816107b5565b840191505092915050565b6000602082019050818103600083015261081981846107c6565b90509291505056fea2646970667358221220b91b97152cb569da32323fe5fec299fc52d51494baf4392f4c4c1c773f16b59064736f6c63430008110033'

type SendFundsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: SendFundsConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class SendFunds__factory extends ContractFactory {
  constructor(...args: SendFundsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: PayableOverrides & { from?: PromiseOrValue<string> }): Promise<SendFunds> {
    return super.deploy(overrides || {}) as Promise<SendFunds>
  }
  override getDeployTransaction(overrides?: PayableOverrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): SendFunds {
    return super.attach(address) as SendFunds
  }
  override connect(signer: Signer): SendFunds__factory {
    return super.connect(signer) as SendFunds__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): SendFundsInterface {
    return new utils.Interface(_abi) as SendFundsInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SendFunds {
    return new Contract(address, _abi, signerOrProvider) as SendFunds
  }
}
