const WhatYouNeedToKnow = () => {
  return (
    <>
      <div className="lg:mt-[150px] mt-[100px] text-white-1">
        <h1 className="flex justify-center text-center font-Plus lg:text-5xl text-[26px] font-extrabold">
          What you need to know
        </h1>
        <h1 className="flex justify-center text-center font-Plus lg:text-5xl text-[26px] font-extrabold">
          about YCLUB
        </h1>
      </div>

      <div className="lg:mt-28 mt-[80px] lg:overflow-x-hidden  lg:snap-none  snap-mandatory snap-x overflow-x-scroll overflow-y-hidden xl:flex grid grid-flow-col-dense lg:flex-row lg:gap-[30px] gap-[40px] lg:px-14 px-4 font-Grotesk leading-tight text-white-1">
        <div className=" snap-center w-[307px] flex-col rounded-xl border border-white-1 pt-[50px] pl-[20px] text-left text-[28px] font-semibold">
          Community first, Exclusivity by Necessity
          <img
            className="flex w-[160px] pt-[315px]"
            src="/images/Vector.svg"
            alt="pic"
          ></img>
        </div>

        <div className=" snap-center flex w-[307px] flex-col rounded-xl border border-white-1 pt-[50px] pl-[20px] text-[28px] font-semibold">
          Lana Super Yacht Collection Supply:
          <span className="mt-[18px] font-normal">7000</span>
          <img
            className="mx-14 mb-5 flex w-[140px]  justify-center pt-[250px]"
            src="/images/Frame 16.svg"
            alt="pic"
          ></img>
        </div>
        <div className=" snap-center flex flex-col w-[307px] rounded-xl border border-white-1 pt-[50px] pl-[20px] text-[28px] font-semibold">
          PFP Allocation:
          <span className="mt-[18px] font-normal">
            WL access will be given to
          </span>
          <img
            className="mb-5 flex justify-center pt-[270px]"
            src="/images/Frame 17.svg"
            alt="pic"
          ></img>
        </div>
        
        <div className=" snap-center flex flex-col w-[307px] rounded-xl border border-white-1 pt-[50px] pl-[25px] pr-[5px] text-[28px] font-semibold">
          Fractional Ownership:
          <span className="mt-[18px] font-normal">
            Each NFT gives you fractional ownership of the Metaverse Mega Yacht
            including a share of all revenue generated.
          </span>
          <img
            className="mb-5 ml-16 flex w-[200px] justify-center pt-[40px]"
            src="/images/Frame 18.svg"
            alt="pic"
          ></img>
        </div>
      </div>
    </>
  );
};

export default WhatYouNeedToKnow;
