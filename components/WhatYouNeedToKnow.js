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

      <div className="lg:mt-28 mt-[80px] lg:overflow-x-hidden  lg:snap-none  snap-mandatory snap-x overflow-x-scroll overflow-y-hidden xl:flex grid grid-flow-col-dense lg:flex-row lg:gap-[30px] gap-[40px] lg:px-14 px-4 font-Grotesk leading-[28px] text-white-1">
        <div className=" snap-center w-[307px] flex-col  pt-[25px] pl-[20px] text-left text-[22px] font-bold">
        <img
            className="w-[295px] mb-[20px]"
            src="/images/whatYouNeedIcon1.png"
            alt="pic"
          ></img>
          YCLUB community members will gain access to an immersive Metaverse.
          
          <p className="font-normal text-[20px] w-[248px] pt-[40px] leading-[25px]">
          This Metaverse will provide extravagant
          user experiences of the Superyacht NFTs
          and act as a hub for the community that
          provides support for an eCommerce marketplace and more.
          </p>
        </div>

        <div className=" snap-center flex w-[307px] flex-col  pl-[20px] text-[22px] font-bold">

        <img
            className="w-[260px] mb-[20px]"
            src="/images/whatYouNeedIcon2.png"
            alt="pic"
          ></img>
        <p className="w-[273px]"> 
        YCLUB NFTs are keys allowing the holders to enter
        the YCLUB Metaverse community and engage in exclusive
        DeFi investment opportunities. 
        </p>

        <p className="font-normal text-[20px] w-[248px] pt-[40px] leading-[25px]">
        Holders of NFTs can profit from revenue 
        generated from events and other Metaverse
        activities.
        </p>
      
         
        </div>
        <div className=" snap-center flex flex-col w-[307px] pt-[35px] pl-[20px] text-[22px] font-bold">
        <img
            className="w-[273px] mb-[20px]"
            src="/images/whatYouNeedIcon3.png"
            alt="pic"
          ></img>
          <p className="w-[273px]">
            YCLUB community members will be able to benefit
            from a suite of DeFi products including a decentralized
            exchange, NFT Marketplace, Non-Custodial Staking Rewards, 
            to better leverage their Web3 experience.
          </p>
        </div>
        
        <div className="snap-center flex flex-col w-[307px] pt-[30px] pl-[25px] pr-[5px] text-[22px] font-bold">
          <img
            className="w-[309px] mb-[20px]"
            src="/images/whatYouNeedIcon4.png"
            alt="pic"
          ></img>
          <p className="w-[273px]">
          YCLUB leverages passive income generation;
          by holding NFTs in the YCLUB crypto wallet,
          community members gain “cash back” rewards
          for their loyalty in SYC, while also receiving
          revenue generated from community owned Superyachts. 
          </p>
        </div>
      </div>
    </>
  );
};

export default WhatYouNeedToKnow;
