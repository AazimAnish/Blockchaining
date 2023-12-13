# ChristmasGreeting Smart Contract

[![Sepolia](https://img.shields.io/badge/Sepolia-Contract-blue)](https://sepolia.io/your-contract-address)

```
// contracts/ChristmasGreeting.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ChristmasGreeting {
    function greet() public pure returns (string memory) {
        return 'Ho, Ho, Ho, Merry Christmas!';
    }
}
```

## Contract Overview

This smart contract, named ChristmasGreeting, is deployed on the Sepolia platform.

- **Purpose**: Provide a Christmas greeting when called.
- **Etherscan link**: [etherscan](https://sepolia.etherscan.io/tx/0xf2677f4908d65c7c228c4cd76cc1223b487ef19c6570dcebd0e0177508e214f1)
- **Contract address that got deployed**: 0xE85a65dfac0CFb04149ed4b81a6AeDE3E5198AdB

## Solidity Code

The Solidity code for this smart contract can be found in the [contracts](https://github.com/AazimAnish/-12DaysofCodeXmas-/tree/main/day1/contracts) directory.

- [ChristmasGreeting.sol](https://github.com/AazimAnish/-12DaysofCodeXmas-/blob/main/day1/contracts/ChristmasGreeting.sol)

## Deployment

@dev: the setup is aiming to deploy in sepolia network, please ensure you have native tokens of that testnet available.

1.  Install dev dependencies:

```source-shell
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
```

2.  Install dependencies:

```source-shell
npm install dotenv
```

3.  Configure the hardhat project (answer with pre-defined response)

```source-shell
npx hardhat init
```

4.  Configure your `hardhat.config.js` file with your preferred network variables, as per in example:

```source-js
require("@nomicfoundation/hardhat-toolbox");

// dotenv reads the `.env` file and makes it available to the NodeJS Environment
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    // Define the sepolia network parameters here
    sepolia: {
      url: process.env.QUICKNODE_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```

5.  Define a `.env` file following the env sample:

```source-toml
QUICKNODE_RPC_URL="..."
PRIVATE_KEY="..."
```

6.  Deploy your contract:

```source-shell
npx hardhat run scripts/deploy.js --network sepolia
```
