import { useState, useEffect } from "react";
import secondsToTime from "../../utils/secondsToTime";
import contractsData from "../../data/contractsData";
import Round from "../../abi/Round";

const CurrentMintButton = ({ currentAccont, contractInfo, currentDate }) => {
  const [mintAmount, setMintAmount] = useState(0);
  const [numberOfRoundUserCanMint, setNumberOfRoundUserCanMint] = useState(5);
  const [numberNftAvaliableToMint, setNumberNftAvaliableToMint] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log("contractInfo: ", contractInfo);
    (async () => {
      for (let i = 0; i < contractsData.length - 1; i++) {
        try {
          const round = Round(contractsData[i].address);
          const isInWhiteList = await round.checkWhitelist(currentAccont);
          if (
            isInWhiteList &&
            contractInfo?.address === contractsData[i].address
          ) {
            console.log("in round " + i);
            setNumberNftAvaliableToMint(1);
            setLoading(false);
            return;
          }
          if (isInWhiteList && contractsData[i].start > currentDate) {
            setNumberOfRoundUserCanMint(i);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    })();
  }, [contractInfo]);

  if (isLoading) {
    return <img className="m-auto mt-6" src="/images/loading.gif"/>;
  }

  if (!contractInfo || numberNftAvaliableToMint === 0) {
    return (
      <button
        className={`mt-[30px] h-[52px] w-[660px] rounded-[26px] bg-pink-1 text-base font-semibold text-white-1`}
        disabled
      >
        {`You can mint in ${secondsToTime(
          contractsData[numberOfRoundUserCanMint].start - currentDate
        )} `}
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
