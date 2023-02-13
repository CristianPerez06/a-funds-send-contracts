import { ethers } from 'hardhat'

const main = async () => {
  const [deployer] = await ethers.getSigners()
  const accountBalance = await deployer.getBalance()

  console.log('deploying contracts with account ', deployer.address)
  console.log('account balance ', accountBalance.toString())

  const sendFundsContractFactory = await ethers.getContractFactory('SendFunds')
  const sendFundsContract = await sendFundsContractFactory.deploy()

  await sendFundsContract.deployed()

  console.log('Funds contract address: ', sendFundsContract.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain()
