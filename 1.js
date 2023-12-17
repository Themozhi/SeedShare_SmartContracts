import "@nomiclabs/hardhat-ethers";
//import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
//import { expect } from "chai";
//import { constants as ethersConstants, Contract } from "ethers";
import { ethers } from "hardhat";

describe("NFTMarket", () => {
  it("should do something", async() => {
    const NFTMarket = await ethers.getContractFactory("NFTMarket");
    const nftMarket = await NFTMarket.deploy();
    await nftMarket.deployed();
    const tokenURI = "https://some-token.uri/";
    const transaction = await nftMarket.createNFT(tokenURI);
    //console.log(transaction);
    const reciept = await transaction.wait();
    const tokenID = reciept.events[0].args.tokenId;
    //console.log(tokenID);
    //console.log(reciept);
  });
});