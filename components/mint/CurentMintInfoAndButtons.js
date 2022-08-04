import { useState } from "react";

const CurentMintInfoAndButtons = ({ currentMintContractIndex }) => {
  const [currentAccont, setCurrentAccount] = useState();

  const handleConnectWalletClick = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("No metamask!");
        return;
      }
      if (!ethereum.isConnected()) {
        console.log("Metamask not conected!");
        return;
      }
      const chainId = await ethereum.request({ method: "eth_chainId" });
      if (chainId !== "0x4") {
        console.log("Wrong chain id!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Account: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <img
        src="./images/HeroSection/yachts_animation.gif"
        className="max-h-[660px] max-w-[660px]"
      />
      <div className="mt-[30px] h-[6px] w-[660px] rounded-[6px] bg-white-1 opacity-30"></div>
      <div className="mt-2 flex w-[660px]  justify-between">
        <span className="text-sm font-light text-white-1">Total Minted</span>
        <span className="text-sm font-light text-white-1">
          <bold>0% </bold>(7000/7000)
        </span>
      </div>
      <div className="flex w-[660px] flex-col">
        <button
          className={`mt-[30px] h-[52px] w-[660px] rounded-[26px]  text-base font-semibold text-white-1 ${
            currentMintContractIndex >= 0 ? "bg-pink-1" : "bg-white-1 bg-opacity-20 disabled text-opacity-50"
          }`}
          onClick={
            currentMintContractIndex >= 0 ? handleConnectWalletClick : null
          }
        >
          Connect your wallet
        </button>
        <button className=" mx-auto mt-[30px] h-[72px] w-[304px] rounded-[36px] bg-blue-3">
          <span className="text-2xl font-semibold text-white-1">
            Pay with Credit Card
          </span>
          <br />
          <span className="text-base font-light text-white-1">
            No Wallet Needed
          </span>
        </button>
      </div>
    </div>
  );
};

export default CurentMintInfoAndButtons;
