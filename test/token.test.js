const { ethers, waffle, network} = require("hardhat");
const { expect } = require("chai");

describe('Token testing', function () {
  let nftContract;

  before(async function () {
    nftContract = await ethers.getContractFactory('SadGorilla');
    nftContract = await nftContract.deploy("SadGorilla", "Sad Gorilla NFT");
    await nftContract.deployed();
  });
  
  describe("Deployment", function () {
    it("Should have the correct owner", async function () {
        const [owner] = await ethers.getSigners();  
        expect(await nftContract.owner()).to.equal(owner.address);
    })

    it("Should have the correct balance after minting", async function () {
        const [owner] = await ethers.getSigners();  
        await nftContract.mint();
        const finalBalance = await nftContract.balanceOf(owner.address)
        expect(finalBalance.toString()).to.equal("1");
        let tokenURI = await nftContract.tokenURI(1);
        expect(tokenURI.toString()).to.equal("https://gateway.pinata.cloud/ipfs/QmPecMJC6XnJPii8o61jTH4nX48K1Zq2XGUuWXocM1YR6y/1.json");
        await nftContract.mint();
        tokenURI = await nftContract.tokenURI(2);
        expect(tokenURI.toString()).to.equal("https://gateway.pinata.cloud/ipfs/QmPecMJC6XnJPii8o61jTH4nX48K1Zq2XGUuWXocM1YR6y/2.json");
    })
 })
});