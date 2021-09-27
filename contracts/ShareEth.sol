//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.6;

import "hardhat/console.sol";

contract ShareEth {
  address[] public ethAdresses;

constructor(address[] memory ethAddressArray) {
  ethAdresses = ethAddressArray;
}
/**
    @notice Receives eth and shares it with all addresses within the array
*/
  receive() external payable {
    for(uint256 i = 0; i < ethAdresses.length; i++)
    payable(ethAdresses[i]).transfer(msg.value / ethAdresses.length);
  }
}