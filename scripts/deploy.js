const hre = require("hardhat");

async function main() {
  console.log("Deploying EXTSY V2 Token...");

  const EXTSYv2 = await hre.ethers.getContractFactory("EXTSYv2");
  const token = await EXTSYv2.deploy();

  await token.deployed();

  console.log("EXTSYv2 deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
