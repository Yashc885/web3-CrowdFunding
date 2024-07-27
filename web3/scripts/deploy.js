const hre = require("hardhat");

async function main() {
  // Compile contracts
  await hre.run('compile');

  // Get the contract factory and deploy the contract
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const MyContract = await hre.ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy();

  console.log("Contract deployed to:", myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
