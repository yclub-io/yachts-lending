import { useState } from "react";
import contractsData from "../../data/contractsData";
import connectMetamask from "../../utils/connectMetamask";
import ConnectMetamask from "./alerts/ConnectMetamask";
import ModalWindowsWrapper from "./alerts/ModalWindowsWrapper";
import CurrentMintButton from "./CurrentMintButton";
import CurrentMintProgressBar from "./CurrentMintProgressBar";

const CurentMintMainInfo = ({ currentMintContractIndex, currentDate }) => {
  const [currentAccont, setCurrentAccount] = useState();
  const [isAvailableToMint, setAvailableToMint] = useState(true);
  const [isAlert, setAlert] = useState(false);
  const contractInfo = contractsData[currentMintContractIndex];

  if (!isAvailableToMint) {
    return (
      <div>
        <img
          src="./images/HeroSection/yachts_animation.gif"
          className="mt-[100px] border-[15px] lg:mt-0 lg:max-h-[750px] lg:max-w-[660px] lg:border-none"
        />
        <CurrentMintProgressBar
          contractInfo={contractInfo}
          setAvailableToMint={setAvailableToMint}
        />
      </div>
    );
  }

  return (
    <div>
      <img
        src="./images/HeroSection/yachts_animation.gif"
        className="mt-[100px] border-[15px] lg:mt-0 lg:max-h-[750px] lg:max-w-[660px] lg:border-none"
      />
      <CurrentMintProgressBar
        contractInfo={contractInfo}
        setAvailableToMint={setAvailableToMint}
      />
      {currentAccont ? (
        <CurrentMintButton
          currentAccont={currentAccont}
          contractInfo={contractInfo}
          currentDate={currentDate}
        />
      ) : (
        <div className="mt-[30px] flex flex-col px-4 lg:w-[660px] lg:p-0">
          <button
            className={`mx-auto h-[52px] w-full rounded-[26px]  bg-pink-1  font-Grotesk text-base font-semibold text-white-1 lg:w-[660px] `}
            onClick={() => setAlert(true)}
          >
            Connect your wallet
          </button>
          {/* <button
            className=" mx-auto lg:mt-[30px] mt-[20px] font-Grotesk lg:h-[72px] h-[69px] lg:w-[304px] w-full rounded-[36px] bg-blue-3"
          >
            <span className="text-2xl font-semibold text-white-1">
              Pay with Credit Card
            </span>
            <br />
            <span className="text-base font-light text-white-1">
              No Wallet Needed
            </span>
          </button> */}
        </div>
      )}
      {isAlert && (
        <ModalWindowsWrapper closeWindow={() => setAlert(false)}>
          <ConnectMetamask
            close={() => setAlert(false)}
            connect={() => {
              connectMetamask(setCurrentAccount);
              setAlert(false);
            }}
          />
        </ModalWindowsWrapper>
      )}
    </div>
  );
};

export default CurentMintMainInfo;
