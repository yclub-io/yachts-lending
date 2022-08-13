import { useState } from "react";
import contractsData from "../../data/contractsData";
import connectMetamask from "../../utils/connectMetamask";
import CurrentMintButton from "./CurrentMintButton";
import CurrentMintProgressBar from "./CurrentMintProgressBar";

const CurentMintMainInfo = ({ currentMintContractIndex, currentDate }) => {
  const [currentAccont, setCurrentAccount] = useState();
  const contractInfo = contractsData[currentMintContractIndex];

  return (
    <div>
      <img
        src="./images/HeroSection/yachts_animation.gif"
        className="max-h-[750px] max-w-[750px] lg:max-w-[660px]"
      />
      <CurrentMintProgressBar contractInfo={contractInfo} />
      {currentAccont ? (
        <CurrentMintButton
          contractInfo={contractInfo}
          currentDate={currentDate}
        />
      ) : (
        <div className="mt-[30px] px-4 lg:p-0 flex lg:w-[660px] flex-col">
          <button
            disabled
            style={{ backgroundColor: "gray" }}
            className={`h-[52px] lg:w-[660px] w-full mx-auto  rounded-[26px]  bg-pink-1 text-base font-Grotesk font-semibold text-white-1 `}
            onClick={() => connectMetamask(setCurrentAccount)}
          >
            Connect your wallet
          </button>
          <button
            disabled
            style={{ backgroundColor: "gray" }}
            className=" mx-auto mt-[30px] lg:h-[72px] h-[69px] lg:w-[304px] w-full rounded-[36px] bg-blue-3"
          >
            <span className="text-2xl font-semibold text-white-1">
              Pay with Credit Card
            </span>
            <br />
            <span className="text-base font-light text-white-1">
              No Wallet Needed
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CurentMintMainInfo;
