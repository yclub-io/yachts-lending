const WhatYouNeedToKnow = () => {
  return (
    <>
      <div className="mt-[200px] text-white-1 lg:mt-[150px] relative">
        <h1 className="flex justify-center text-center font-Plus text-[26px] font-extrabold lg:text-5xl">
          What you need to know
        </h1>
        <h1 className="flex justify-center text-center font-Plus text-[26px] font-extrabold lg:text-5xl">
          about YCLUB
        </h1>
      </div>

      <div className="mt-[80px] grid snap-x  snap-mandatory  grid-flow-col-dense gap-[40px] overflow-y-hidden overflow-x-scroll px-4 font-Grotesk leading-[28px] text-white-1 lg:mt-28 lg:snap-none lg:flex-row lg:gap-[30px] lg:overflow-x-hidden lg:px-14 xl:flex">
        <div className=" w-[307px] snap-center flex-col  pt-[25px] pl-[20px] text-left text-[22px] font-bold">
          <img
            className="mb-[20px] w-[295px]"
            src="/images/whatYouNeedIcon1.png"
            alt="pic"
          ></img>
          Fractional Ownership
          <p className="w-[248px] pt-[40px] text-[20px] font-normal leading-[25px]">
            Enjoy factional ownership of Super Yachts in the Metaverse and IRL
            when holding YCLUB dNFTs and pNFTs. As a holder, benefit from
            ownership perks including revenue shares from e-comm, events, and
            super yacht charters.
          </p>
        </div>

        <div className=" flex w-[307px] snap-center flex-col  pl-[20px] text-[22px] font-bold">
          <img
            className="mb-[20px] w-[260px]"
            src="/images/whatYouNeedIcon2.png"
            alt="pic"
          ></img>
          <p className="w-[273px]">Dedicated Ecosystem</p>

          <p className="w-[248px] pt-[40px] text-[20px] font-normal leading-[25px]">
            Leisurely experience Web3 through the YCLUB dedicated ecosystem
            where collecting is just as exciting as it is convenient. Including
            our native wallet, experience lower transaction fees and a seamless
            Web3 experiences with our NFTs.
          </p>
        </div>
        <div className=" flex w-[307px] snap-center flex-col pt-[35px] pl-[20px] text-[22px] font-bold">
          <img
            className="mb-[20px] w-[273px]"
            src="/images/whatYouNeedIcon3.png"
            alt="pic"
          ></img>
          <p className="w-[273px]">DeFi Investments</p>

          <p className="w-[248px] pt-[40px] text-[20px] font-normal leading-[25px]">
            Benefit from our native token as you trust YCLUB to charter your
            Web3 experience. Leverage the benefits of compounded interest
            through our auto staking mechanisms and get the most value from your
            collected passive income.
          </p>
        </div>

        <div className="flex w-[307px] snap-center flex-col pt-[30px] pl-[25px] pr-[5px] text-[22px] font-bold">
          <img
            className="mb-[20px] w-[309px]"
            src="/images/whatYouNeedIcon4.png"
            alt="pic"
          ></img>
          <p className="w-[273px]">Community of Innovators</p>
          <p className="w-[248px] pt-[40px] text-[20px] font-normal leading-[25px]">
            Build beyond the initial experiences and create new opportunities
            with fellow community members through non-experiable passive income.
            Don’t miss the opportunity to invest with others who are changing
            our way of engaging in Web3.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhatYouNeedToKnow;
