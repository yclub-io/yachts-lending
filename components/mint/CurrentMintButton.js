import { useState, useEffect } from "react";
import secondsToTime from "../../utils/secondsToTime";
import contractsData from "../../data/contractsData";
import Round from "../../abi/Round";
import RoundWithSigner from "../../abi/RoundWithSigner";
import { ethers } from "ethers";
import { useRouter } from "next/router";

const CurrentMintButton = ({ currentAccont, contractInfo, currentDate }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const [numberOfRoundUserCanMint, setNumberOfRoundUserCanMint] = useState(4);
  const [numberNftAvaliableToMint, setNumberNftAvaliableToMint] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {


    (async () => {
      for (let i = 0; i < contractsData.length - 1; i++) {
        try {
          const round = Round(contractsData[i].address);
          const isInWhiteList = await round.whiteList(currentAccont);
          if (
            isInWhiteList &&
            contractInfo?.address === contractsData[i].address
          ) {
            const alreadyBought = await round.userPurchasedNum(currentAccont);
            setNumberNftAvaliableToMint(
              contractsData[i].max - alreadyBought.toNumber()
            );
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
    return (
      <div className="lg:w-[660px]">
        <img className="m-auto mt-6" src="/images/loading.gif" />
      </div>
    );
  }

  if (!contractInfo || numberNftAvaliableToMint === 0) {
    return (
      <div className="mx-[16px] flex lg:mx-[0px]">
        <button
          className={`mt-[30px] h-[52px] w-[660px] rounded-[26px] bg-pink-1 text-base font-semibold text-white-1`}
          disabled
        >
          {`You can mint in ${secondsToTime(
            contractsData[numberOfRoundUserCanMint].start - currentDate
          )} `}
        </button>
      </div>
    );
  }

  const handleMintClick = async () => {
    setLoading(true);
    try {
      const roundWithSigner = RoundWithSigner(contractInfo.address);
      const price = await roundWithSigner.mintPrice();
      console.log("price: ", ethers.utils.formatEther(price));
      const tx = await roundWithSigner.paidMint(mintAmount, {value: price.mul(mintAmount)});
      console.log("tx: ", tx);
      const responce = await tx.wait();
      console.log("responce: ", responce);
      router.reload();
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false);
    }
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
          disabled={mintAmount >= numberNftAvaliableToMint}
          onClick={() => setMintAmount(mintAmount + 1)}
        >
          +
        </button>
      </div>
      <button
        className={`h-[52px] w-[55%] rounded-[26px] text-base font-semibold text-white-1 ${
          numberNftAvaliableToMint > 0 ? "bg-pink-1" : "bg-gray-1"
        }`}
        disabled={numberNftAvaliableToMint === 0}
        onClick={handleMintClick}
      >
        Mint
      </button>
    </div>
  );
};

export default CurrentMintButton;
