import Button from "../TW_components /Button";

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="relative lg:mx-8 mx-[16px] lg:mt-[146px] mt-[78px] flex font-Grotesk tracking-[-2%] text-white-1">
        
        {/*DIV TEXT*/}
        <div className="mt-[-70px] mr-2 flex lg:basis-1/2 flex-col text-left">
          <h1 className="lg:text-[180px] text-[100px] font-bold">YCLUB</h1>
          <h2 className="lg:mt-[-20px] mt-[-10px] lg:text-[40px] text-[28px] font-bold">
            JULY 31 &#160;
            <span className="bg-gradient-to-b from-purple-2 via-purple-3 to-purple-2 bg-clip-text text-white-1 text-opacity-[0%]">
              2022
            </span>
          </h2>

          {/*DIV GIF MOBILE*/}
        <div className="flex justify-center">
          <img
            src="./images/gif_test.png"
            className="lg:hidden flex mt-[50px] min-w-screen"
          />
        </div>

          <h2 className="lg:mt-[256px] mt-[52px] flex lg:text-[64px] text-[36px] font-bold leading-[81.66px]">
            JOIN &#160;
            <a target="_blank" href="https://discord.gg/yclub" className="flex">
              <img
                src="./images/HeroSection/discord_big_logo.svg"
                className="lg:mr-[15px] mr-[10px] lg:w-full w-[27px]"
              />
              <span className="bg-gradient-to-r from-blue-2 to-pink-2 bg-clip-text bg-pos-0 hover:bg-pos-100 duration-700 bg-size-200 transition-all text-white-1 text-opacity-[0%]">
                DISCORD
              </span>
            </a>
          </h2>
          <h2 className="flex lg:text-[64px] text-[36px] mt-[-20px] font-bold lg:leading-[81.66px] lg:w-auto w-[350px]">
            FOR WHITELIST INFO
          </h2>
        </div>

        {/*DIV GIF DESKTOP*/}
        <div className="lg:flex hidden basis-1/2">
          <img
            src="./images/gif_test.png"
            className="max-h-[660px] max-w-[660px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
