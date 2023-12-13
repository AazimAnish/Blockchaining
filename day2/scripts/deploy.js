const { ethers } = require("hardhat");

async function main() {

  const ChristmasGreeting = await ethers.getContractFactory("ChristmasGreeting");

  const greeting = await ChristmasGreeting.deploy();

  console.log("ChristmasGreeting Contract Address:", greeting.address);

  console.log(greeting);

}

main()
  .then(() => process.exit(0))  
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });