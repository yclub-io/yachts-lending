import contractsData from "../../data/contractsData";
import secondsToTime from "../../utils/secondsToTime";

const MintsList = ({ currentDate, currentMintContractIndex }) => {
  const renderMints = contractsData.map((contract, index) => (
    <div
      key={index}
      className={`flex flex-col
    rounded-[10px] border
      lg:pt-[20px] lg:pb-[20px] pt-[20px] pb-[15px] lg:pl-[20px] lg:pr-[28px] pl-[10px] pr-[16px] font-Grotesk text-white-1 ${
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
            <div className="flex lg:flex-row flex-col">
            <p className=" text-[13px] text-pink-1">
              Starts in:
            </p>
              <span className="text-[13px] lg:ml-[21px] lg:mr-[-45px]  w-[107px] text-white-1">
                {secondsToTime(contract.start - currentDate)}
              </span>
            
            </div>
          ) : currentDate < contract.end ? (
            <div className="flex lg:flex-row flex-col"> 
            <p className="text-[13px] text-pink-1">
              Ends in:
            </p>
              <span className="text-[13px] lg:ml-[21px] lg:mr-[-40px] w-[107px] text-white-1">
                {secondsToTime(contract.end - currentDate)}
              </span>
            </div> 
          ) : (
            <p className="text-[13px] mr-[15px] text-pink-1">ENDED</p>
          )}
        </div>
      </div>

      <div className="flex lg:flex-row flex-col lg:space-x-[15px]">
        <div className="flex lg:space-x-[10px] space-x-[10px]">
        <span className="rounded-[16.5px]  bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] text-[11px] font-medium tracking-[10%]">
          {contract?.whitelist
            ? `WHITELIST ${contract.whitelist}`
            : "PUBLIC MINT"}
        </span>
        <span className="rounded-[16.5px] bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] text-[11px] font-medium tracking-[10%]">
          {`MAX ${contract.max} PER`}
        </span>
        </div> 
        <div className="lg:mt-0 mt-[5px] rounded-[16.5px] bg-white-1 bg-opacity-[20%] px-[10px] max-w-[111px] py-[5px] text-[11px] font-medium tracking-[10%]">
          {`PRICE ${contract.price} ETH`}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="lg:mx-[60px] mx-[16px] mb-[56px] space-y-[20px]">{renderMints}</div>
  );
};

export default MintsList;
