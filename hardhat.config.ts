import * as dotenv from "dotenv";
import type { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-chai-matchers";

dotenv.config();

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: "0.8.4",
                settings: {
                    evmVersion: "constantinople",
                    optimizer: {
                        enabled: true,
                        runs: 100,
                    },
                },
            },
        ],
        overrides: {},
    },
    typechain: {
        outDir: "typechain",
    },
    // networks: {
    //     localhost: {
    //     },
    //     hardhat: {
          
    //     },
    //     coverage: {
    //         url: "http://localhost:8555",
    //     },
    // }
};

export default config;
