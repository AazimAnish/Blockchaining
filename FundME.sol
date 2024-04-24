// SPDX-License-Identifier: MIT

// Get funds from users
// Withdraw funds
// Set a minimum funding value in USD

pragma solidity ^0.8.18;

contract FundMe {

    function fund() public payable{
        // Allow users to send $
        // Have a minimum $ to sent

        require(msg.value > 1e18, "Didn't send enough ETH");
    }

    //function withdraw() public {}

}
