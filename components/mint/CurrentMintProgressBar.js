const CurrentMintProgressBar = ({ contractInfo }) => {
  if (!contractInfo) {
    return null;
  }
  const progress =
    (contractInfo.paddingSupply / contractInfo.totalSupply) * 100;
  return (
    contractInfo && (
      <>
        <div className="mt-[30px] h-[6px] lg:mx-0 mx-[16px] lg:w-[660px] rounded-[6px] bg-gray-1 ">
          <div
            style={{
              width: progress + "%",
            }}
            className={`z-10 h-full rounded-[6px] bg-pink-1 `}
          />
        </div>
        <div className="lg:mt-[14px] mt-[18px] flex lg:w-[660px]  lg:mx-0 mx-[16px]   justify-between">
          <span className="text-sm font-light text-white-1">Total Minted</span>
          <span className="text-sm font-light text-white-1">
            <span className="font-semibold">{Math.floor(progress)}% </span>
            {contractInfo.paddingSupply} / {contractInfo.totalSupply}
          </span>
        </div>
      </>
    )
  );
};

export default CurrentMintProgressBar;
