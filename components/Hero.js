import Button from "../TW_components /Button";

const Hero = () => {
  return (
    <>
      <div id='hero' className="mx-8 relative flex mt-[824px]  tracking-[-2%] font-Grotesk text-white-1">
        {/*DIV TEXT*/}
        <div className="flex basis-1/2 flex-col text-left mt-[-70px]">
          <h1 className="font-bold text-[180px]"> 
            YCLUB
          </h1>
            <h2 className="mt-[-20px] text-[40px] font-bold"> 
              JULY 31 &#160;
              <span className="text-white-1 bg-gradient-to-b from-purple-2 via-purple-3 to-purple-2 bg-clip-text text-opacity-[0%]">
               2022
              </span>
            </h2>
            <h2 className="flex mt-[256px] font-bold text-[64px] leading-[81.66px]"> 
             JOIN &#160;
              <a className="flex"> 
                <img src="./images/HeroSection/discord_big_logo.svg"
                     className="mr-[15px]"/> 
                <span className="text-white-1 bg-gradient-to-r from-blue-2 to-pink-2 bg-clip-text text-opacity-[0%]">
                DISCORD 
                </span>
              </a>
            </h2>
            <h2 className="flex font-bold text-[64px] leading-[81.66px]"> 
              FOR WHITELIST INFO
            </h2>
            
        </div>
        {/*DIV GIF*/}
        <div className="flex basis-1/2">
          <img src="./images/gif_test.png"
              className="max-w-[660px] max-h-[660px]"/>
        </div>
      
      </div>
    </>
  );
};

export default Hero;
