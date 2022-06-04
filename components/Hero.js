import Button from "../TW_components /Button";

const Hero = () => {
  return (
    <>
      <div id='hero' className="relative">
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
      
      <div className="relative flex justify-center mt-[85px]"> 
      <Button > APPLY FOR WHITELIST </Button>
      </div>
      
    </>
  );
};

export default Hero;
