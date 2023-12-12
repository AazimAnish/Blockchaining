// Import the Hardhat package
const hre = require("hardhat");

async function main() {
  // Using `hre` - Hardhat Runtime Environment - we find and deploy
  // a contract named `ChristmasGreeting`
  const ChristmasGreeting = await hre.ethers.getContractFactory("ChristmasGreeting");
  const christmasGreeting = await ChristmasGreeting.deploy();

  // Wait for the contract to be mined
  await christmasGreeting.deployTransaction.wait();

  // We print the address of the deployed contract to our console
  console.log("ChristmasGreeting Contract Address:", christmasGreeting.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
