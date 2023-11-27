require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/MTI2hmWU3Ye0S5A72rt2LiEabbLaAI0K', // Update with your Infura project ID
      accounts: [process.env.PRIVATE_KEY],
      chainId: 5. // Goerli chain ID
    }
  }
}