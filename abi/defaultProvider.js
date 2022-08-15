import { ethers } from "ethers";

const defaultProvider = new ethers.providers.InfuraProvider(
  process.env.targetChainName
);

export default defaultProvider;
