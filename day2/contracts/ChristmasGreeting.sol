// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChristmasGreeting {

    function addMerryChristmas(string memory _input) public pure returns (string memory) {
        return string(abi.encodePacked(_input, " Merry Christmas"));
    }

}