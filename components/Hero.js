const Hero = () => {
  return (
    <>
      <div className="relative">
        <img
          className="absolute top-[-110px] h-[900px] w-max max-w-[1440px] object-cover"
          src="/images/heroSectionWaves.png"
          alt="hero-bg"
        ></img>
      </div>

      <div className="flex flex-row px-14 pt-9 font-Grotesk text-white-1">
        <div className="z-50 flex basis-1/2 flex-col">
          <p className="text-[180px] font-bold">YCLUB</p>
          <span className="text-base">NFT PROJECT</span>
        </div>
        <div className="z-50 flex basis-1/2 flex-col pl-20">
          <p className="flex flex-col pt-[50px] text-[180px] font-bold leading-[180px]">
            JULY
            <span className=" bg-gradient-to-t from-blue-1 to-purple-1 bg-clip-text text-black-1 text-opacity-0">
              2022
            </span>
          </p>
          <p className="w-[400px] pt-8 text-lg">
            Your charter into a world of extravagance both in the Metaverse and
            beyond.
          </p>
        </div>
      </div>

      <div className=" relative mx-10 mt-20 flex justify-center text-white-1">
        <div className="w-62 absolute inset-0 mx-[555px] rounded-lg bg-pink-1 blur-sm"></div>
        <button className="text-black-2 relative rounded-full border  border-pink-1 bg-black-1 py-3 px-12 font-Grotesk text-base font-medium tracking-wider shadow-inner shadow-pink-1 transition-all duration-700 hover:py-4 hover:px-14 disabled:bg-opacity-5">
          APPLY FOR WHITELIST
        </button>
      </div>
    </>
  );
};

export default Hero;
