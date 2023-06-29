/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-waffle");
 require("@nomiclabs/hardhat-etherscan");
 module.exports = {
   networks: {
     ropsten: {
       url: `https://ropsten.infura.io/v3/${process.env.mainnet_key}`,
       chainId: 3,
       accounts: [`${process.env.private_key}`],
     },
     rinkeby: {
       url: `https://rinkeby.infura.io/v3/${process.env.mainnet_key}`,
       chainId: 4,
       accounts: [`${process.env.private_key}`],
     },
     mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.mainnet_key}`, // or any other JSON-RPC provider
      accounts: [`${process.env.private_key}`],
      gasPrice: 50000000000,
      saveDeployments: true,
    }
   },
   etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: `${process.env.etherscan_key}`
  },
  solidity: {
    version: "0.8.0",
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
 };
 