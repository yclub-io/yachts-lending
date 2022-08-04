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
              {console.log(
                "contract.start - currentDate: ",
                contract.start - currentDate
              )}
              {console.log("contract.start: ", contract.start)}
              {console.log("currentDate: ", contract.start - currentDate)}
              {console.log("index: ", index)}
              Starts in:
              <span className="pl-[21px] text-white-1">
                {secondsToTime(contract.start - currentDate)}
              </span>
            </p>
          ) : currentDate < contract.end ? (
            <p className="text-[13px] text-pink-1">
              Ends in:
              <span className="pl-[21px] text-white-1">00 : 05 : 40 : 11</span>
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
          {`PRICE ${contract.max} ETH`}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mx-[60px] mb-[56px] space-y-[20px]">
      {renderMints}

      {/*UNACTIVE*/}
      <div
        className="flex flex-col
                        rounded-[10px] border
                       py-[20px] px-[28px] font-Grotesk text-white-1"
      >
        {/*TITLE-n-TIMER */}
        <div className="mb-[19px] flex justify-between font-semibold">
          <div>
            <p className="text-[16px]">Whitelist Mint</p>
          </div>
          <div>
            <p className="pl-[238px] text-[13px] text-pink-1">
              Starts in:
              <span className="pl-[21px] text-white-1">00 : 05 : 40 : 11</span>
            </p>
          </div>
        </div>

        {/*MINT INFO*/}
        <div className="flex space-x-[15px]">
          <div className="rounded-[16.5px] bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] text-[12px] font-medium tracking-[10%]">
            WHITELIST 1000
          </div>
          <div className="rounded-[16.5px] bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] text-[12px] font-medium tracking-[10%]">
            MAX 2 TOKENS
          </div>
          <div className="rounded-[16.5px] bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] text-[12px] font-medium tracking-[10%]">
            PRICE 1.50 ETH
          </div>
        </div>
      </div>

      {/*ENDED*/}
      <div
        className="flex flex-col
                        rounded-[10px] border
                      border-white-1 py-[20px] px-[28px] font-Grotesk text-white-1"
      >
        {/*TITLE-n-TIMER */}
        <div className="mb-[19px] flex justify-between font-semibold">
          <div>
            <p className="text-[16px]">Whitelist Mint</p>
          </div>
          <div>
            <p className="pl-[238px] text-[13px] text-pink-1">ENDED</p>
          </div>
        </div>

        {/*MINT INFO*/}
        <div className="flex space-x-[15px]">
          <div className="rounded-[16.5px] bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] text-[12px] font-medium tracking-[10%]">
            WHITELIST 1000
          </div>
          <div className="rounded-[16.5px] bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] text-[12px] font-medium tracking-[10%]">
            MAX 2 TOKENS
          </div>
          <div className="rounded-[16.5px] bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] text-[12px] font-medium tracking-[10%]">
            PRICE 1.50 ETH
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintsList;
