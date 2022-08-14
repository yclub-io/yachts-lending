import { ethers } from "ethers";
import metamskProvider from "./metamskProvider";
import abi from "./abi";

let RoundWithSigner;

if (metamskProvider) {
  const Round = (address) => new ethers.Contract(address, abi, metamskProvider);
  const signer = metamskProvider.getSigner();
  RoundWithSigner = Round.connect(signer);
}

export default RoundWithSigner;
