// SPDX-License-Identifier: MIT

// Get funds from users
// Withdraw funds
// Set a minimum funding value in USD

pragma solidity ^0.8.18;

import {PriceConverter} from "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256;

    uint256 public minimumUsd = 5e18;

    address[] public funder;
    mapping(address funder => uint256 amountFunded) public addressToAmountFunded;

    function fund() public payable{
        require(msg.value.getConversionRate() >=  minimumUsd, "Didn't send enough ETH");
        funder.push(msg.sender);
        addressToAmountFunded[msg.sender] = addressToAmountFunded[msg.sender] + msg.value;
    }

    //function withdraw() public {}

}
