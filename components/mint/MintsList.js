import contractsData from "../../data/contractsData";
import secondsToTime from "../../utils/secondsToTime";

const MintsList = ({ currentDate, currentMintContractIndex }) => {
  const renderMints = contractsData.map((contract, index) => (
    <div
      key={index}
      className={`flex flex-col
    rounded-[10px] border
   py-[20px] px-[28px] font-Grotesk text-white-1 ${
     currentMintContractIndex === index
       ? "border-pink-1 shadow-mintGlow"
       : "border-white-1"
   } `}
    >
      <div className="mb-[19px] flex justify-between font-semibold">
        <div>
          <p className="text-[16px]">{contract.name}</p>
        </div>
        <div>
          {currentDate < contract.start ? (
            <p className=" text-[13px] text-pink-1">
              Starts in:
              <span className="pl-[21px] text-white-1">
                {secondsToTime(contract.start - currentDate)}
              </span>
            </p>
          ) : currentDate < contract.end ? (
            <p className="text-[13px] text-pink-1">
              Ends in:
              <span className="pl-[21px] text-white-1">{secondsToTime(contract.end - currentDate)}</span>
            </p>
          ) : (
            <p className="text-[13px] text-pink-1">ENDED</p>
          )}
        </div>
      </div>

      <div className="flex space-x-[15px]">
        <div className="rounded-[16.5px] bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] text-[12px] font-medium tracking-[10%]">
          {contract?.whitelist
            ? `WHITELIST ${contract.whitelist}`
            : "PUBLIC MINT"}
        </div>
        <div className="rounded-[16.5px] bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] text-[12px] font-medium tracking-[10%]">
          {contract?.max ? `MAX ${contract.max} PER` : "NO MAX"}
        </div>
        <div className="rounded-[16.5px] bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] text-[12px] font-medium tracking-[10%]">
          {`PRICE ${contract.price} ETH`}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mx-[60px] mb-[56px] space-y-[20px]">{renderMints}</div>
  );
};

export default MintsList;
