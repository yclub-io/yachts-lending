import { useState, useEffect } from "react";
import Round from "../../abi/Round";

const CurrentMintProgressBar = ({ contractInfo }) => {
  const [realSupplay, setRealSupply] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (contractInfo?.address) {
      const round = Round(contractInfo.address);
      (async () => {
        const realSupplay = await round.roundTotalSupply();
        console.log("realSupplay: ", realSupplay.toNumber());
        setRealSupply(realSupplay.toNumber())
      })();
    }
    setLoading(false)
  }, [contractInfo?.address]);

  if (!contractInfo || isLoading) {
    return null;
  }
  const progress =
    ((contractInfo.totalSupply - realSupplay) / contractInfo.totalSupply) * 100;
  return (
    contractInfo && (
      <>
        <div className="mx-[16px] mt-[30px] h-[6px] rounded-[6px] bg-gray-1 lg:mx-0 lg:w-[660px] ">
          <div
            style={{
              width: progress + "%",
            }}
            className={`z-10 h-full rounded-[6px] bg-pink-1 `}
          />
        </div>
        <div className="mx-[16px] mt-[18px] flex justify-between  lg:mx-0 lg:mt-[14px]   lg:w-[660px]">
          <span className="text-sm font-light text-white-1">Total Minted</span>
          <span className="text-sm font-light text-white-1">
            <span className="font-semibold">{Math.floor(progress)}% </span>
            {contractInfo.totalSupply - realSupplay} / {contractInfo.totalSupply}
          </span>
        </div>
      </>
    )
  );
};

export default CurrentMintProgressBar;
