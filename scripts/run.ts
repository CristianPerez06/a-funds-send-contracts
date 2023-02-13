import { ethers } from 'hardhat'

const main = async () => {
  const sendFundsContractFactory = await ethers.getContractFactory('SendFunds')
  const sendFundsContract = await sendFundsContractFactory.deploy({
    value: ethers.utils.parseEther('4'),
  })

  await sendFundsContract.deployed()

  console.log('contract address: ', sendFundsContract.address)
  const contractBalance = await ethers.provider.getBalance(sendFundsContract.address)
  console.log('Contract balance:', ethers.utils.formatEther(contractBalance))

  const [owner, randomPerson] = await ethers.getSigners()
  const sendFunds = await sendFundsContract.connect(randomPerson).sendFunds(randomPerson.address, 2)
  await sendFunds.wait()

  const allTxn = await sendFundsContract.getAllTxn()
  console.log(allTxn)
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
