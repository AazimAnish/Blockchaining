# ChristmasStringConcat Smart Contract 

[![Sepolia](https://img.shields.io/badge/Sepolia-Contract-blue)](https://sepolia.etherscan.io/tx/0x5f5dc1113a60d05a3b2b5ef4822ecc6aacf0270160e22a14f426a82b3529ccea)

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract NumberSum {
    function Sum(uint256 num1, uint256 num2) public pure returns (uint256) {
        uint256 result = num1 + num2;
        return result;
    }
}
```

## Contract Overview

This smart contract, named ChristmasGreeting, is deployed on the Sepolia platform.

- **Purpose**: Accepts 2 integers, sums them and returns this sum".
- **Etherscan link**: [etherscan](https://sepolia.etherscan.io/tx/0x5f5dc1113a60d05a3b2b5ef4822ecc6aacf0270160e22a14f426a82b3529ccea)
- **Contract address that got deployed**: 0xafbDeEE825D5fc83aF1e89c2727ebc5a272D3bFf

## Solidity Code

The Solidity code for this smart contract can be found in the [contracts](https://github.com/AazimAnish/-12DaysofCodeXmas-/blob/main/day3/contracts/MerrySum.sol) directory.

- [ChristmasGreeting.sol](https://github.com/AazimAnish/-12DaysofCodeXmas-/blob/main/day3/contracts/MerrySum.sol)

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
