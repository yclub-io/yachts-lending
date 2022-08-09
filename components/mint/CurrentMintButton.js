import { useState } from "react";
import secondsToTime from "../../utils/secondsToTime"
import contractsData from "../../data/contractsData"

const CurrentMintButton = ({ contractInfo, currentDate }) => {
  const [mintAmount, setMintAmount] = useState(1);


  if (!contractInfo) {
    return (
      <button
        className={`mt-[30px] h-[52px] w-[660px] rounded-[26px] bg-pink-1 text-base font-semibold text-white-1`}
        disabled
      >
        {`You can mint in ${secondsToTime(contractsData[6].start - currentDate)} `}
      </button>
    );
  }

  const handleMintClick = () => {
    console.log("Mint with account ", contractInfo.address);
  };

  return (
    <div className="mt-[30px] flex w-[660px] justify-between">
      <div className=" flex h-[52px] w-[40%] items-center justify-between rounded-[26px] border border-white-1 border-opacity-40 text-base font-semibold text-white-1">
        <button
          className="ml-10"
          disabled={mintAmount <= 1}
          onClick={() => setMintAmount(mintAmount - 1)}
        >
          -
        </button>
        <span>{mintAmount}</span>
        <button
          className="mr-10"
          disabled={false}
          onClick={() => setMintAmount(mintAmount + 1)}
        >
          +
        </button>
      </div>
      <button
        className={`h-[52px] w-[55%] rounded-[26px] bg-pink-1 text-base font-semibold text-white-1`}
        onClick={handleMintClick}
      >
        Mint
      </button>
    </div>
  );
};

export default CurrentMintButton;
