require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/4a0c53a5e4d34ddfa9725982d54c25b5",
      accounts: [process.env.KEY]
    }
  }
};
