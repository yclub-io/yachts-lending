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
        className="lg:mt-0 mt-[100px] lg:border-none border-[15px] lg:max-h-[750px] lg:max-w-[660px]"
      />
      <CurrentMintProgressBar contractInfo={contractInfo} />
      {currentAccont ? (
        <CurrentMintButton
        currentAccont={currentAccont}
          contractInfo={contractInfo}
          currentDate={currentDate}
        />
      ) : (
        <div className="mt-[30px] px-4 lg:p-0 flex lg:w-[660px] flex-col">
          <button
            className={`h-[52px] lg:w-[660px] w-full mx-auto  rounded-[26px]  bg-pink-1 text-base font-Grotesk font-semibold text-white-1 `}
            onClick={() => connectMetamask(setCurrentAccount)}
          >
            Connect your wallet
          </button>
          <button
            className=" mx-auto lg:mt-[30px] mt-[20px] font-Grotesk lg:h-[72px] h-[69px] lg:w-[304px] w-full rounded-[36px] bg-blue-3"
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
