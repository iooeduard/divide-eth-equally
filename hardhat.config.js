require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-solhint");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.6",
  networks: {
  ropsten: {
    url: "https://ropsten.infura.io/v3/a2a8319a4e324ec4a3c5556b4c31fa08",
    accounts: {
      mnemonic: "industry layer bird test junk shadow visa lottery human spatial pact balcony"
    }
  }
  }
};
