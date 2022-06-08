import Button from "../TW_components /Button";

const Hero = () => {
  return (
    <>
      <div id='hero' className="relative">
        {/*
        <img
          className="lg:flex hidden absolute top-[-110px] h-[900px] max-w-[1440px] bg-clip-content bg-contain"
          src="/images/heroSectionWaves.png"
          alt="hero-bg"
        ></img>
        */}
      </div>
      

      <div className="flex lg:flex-row  flex-col lg:px-14 px-4 pt-9 font-Grotesk text-white-1">
        <div className="z-10 flex basis-1/2 flex-col">
          <p className="lg:text-[180px] text-[100px] font-bold md:text-center">YCLUB</p>
          <span className="lg:text-base text-xs md:text-center font-normal lg:pr-[450px]">NFT PROJECT</span>
        </div>
        <div className="z-10 flex lg:basis-1/2 flex-col lg:pl-20">
          <p className="flex flex-col lg:pt-[50px] pt-[60px] lg:text-[180px] text-[100px] font-bold lg:leading-[180px] leading-[100px] md:text-center">
            JULY
            <span className=" bg-gradient-to-t from-blue-1 to-purple-1 bg-clip-text text-black-1 text-opacity-0 md:text-center">
              2022
            </span>
          </p>
          <p className="lg:w-[400px] min-w-[319px] lg:pt-8 pt-4 lg:text-lg text-base lg:ml-[80px] lg:text-left md:text-center text-left">
            Your charter into a world of extravagance both in the Metaverse and
            beyond.
          </p>
        </div>
      </div>
      
      <a href="#whitelist"> 
      <div className="flex justify-center lg:mt-[85px] mt-[70px]"> 
      <button
       className="lg:w-auto w-[342px]  absolute z-40 text-white-1 border border-pink-1 bg-black-1 shadow-btnGlowInnit py-3 px-12 rounded-full font-Grotesk text-base 
        hover:shadow-btnGlowHover font-medium tracking-wider transition-all duration-700 hover:py-4 hover:px-14"> 

    APPLY FOR WHITELIST
    </button>
      </div>
      </a>
      
    </>
  );
};

export default Hero;
