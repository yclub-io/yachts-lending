import { ethers } from "ethers";

const defaultProvider = new ethers.providers.JsonRpcProvider(process.env.rpc);

export default defaultProvider;