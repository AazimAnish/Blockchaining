const hre = require("hardhat");

async function main() {
  const NumberSum = await hre.ethers.getContractFactory("NumberSum");
  const numberSum = await NumberSum.deploy();

  console.log("NumberSum contract:", numberSum);
  console.log("NumberSum deployed to:", numberSum.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });