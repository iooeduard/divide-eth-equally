// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ShareEth = await hre.ethers.getContractFactory("ShareEth");
  const share = await ShareEth.deploy(["0xb6e20ff4ae7d29be233d874633f2f0dcb326e5c0", "0x8609d4db3ce70b1a2969e55c6973a12ffc58d454", "0xee96e2234edd26dc96bc8dc9a51a513b4e7d62e2", "0x02b04cef8fab044c2b518b1ac215b36498686cb3", "0xcb2f834ae3bf9c8004ea82109c5b77b2b4bfb69a", "0x7e7d4bf7a15cec824ce2d4467491be52f0274c3c", "0x824c1813d9e8ba9875bee2b8aceb52fb8486c1ff", "0x9214a60a6b14fbd80ec77f2dbd03c3a295687e15", "0x04add2648743cbdd40c221df0ab1f63124345391", "0xf79e68efaeb0d2d38270493c9f04f94081fc1030"]);

  await share.deployed();

  console.log("ShareEth Contract deployed at address:", share.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
