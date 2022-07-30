import { TestContract, TestContract__factory } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";
import { expect, use } from "chai";

describe("TestContract", async () => {
  let contract: TestContract;
  let username: string;
  let password: string;
  let signers: SignerWithAddress[];
  let owner: SignerWithAddress;

  beforeEach(async () => {
    signers = await ethers.getSigners();
    owner = signers[0];

    let _username = "Rajesh";
    let _password = "aRe$%^%&*";

    username = ethers.utils.formatBytes32String(_username);
    password = ethers.utils.formatBytes32String(_password);
    let _contract = new TestContract__factory(owner);
    contract = await _contract.deploy(username, password);
  });

  describe("Excessing username and password", async () => {
    it("TestCase to get Username", async () => {
      let _usernameInContract = await ethers.provider.getStorageAt(contract.address, 0);
      expect(_usernameInContract).to.be.eq(username);
      console.log(ethers.utils.parseBytes32String(_usernameInContract));
    });

    it("TestCase to get Password", async () => {
      let _passwordInContract = await ethers.provider.getStorageAt(contract.address, 1);
      expect(_passwordInContract).to.be.eq(password);
      console.log(ethers.utils.parseBytes32String(_passwordInContract));
    });
  });
});
