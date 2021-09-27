const { expect } = require("chai");

describe("ShareEth", function () {

  it("Should check that eth was divided between the addresses", async function () {
    [callerWallet, address1, address2, address3, address4] = await ethers.getSigners();
    const addresses = [address1.address, address2.address, address3.address, address4.address];
    shareEth = await ethers.getContractFactory("ShareEth");
    shareContract = await shareEth.deploy(addresses);
    
    await expect(await callerWallet.sendTransaction({to: shareContract.address, value: 200}))
    .to.changeEtherBalances([address1, address2, address3, address4], [50, 50, 50, 50]);
});
});