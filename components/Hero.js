import Button from "../TW_components /Button";

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="relative mx-8 mt-[853px] flex  font-Grotesk tracking-[-2%] text-white-1"
      >
        {/*DIV TEXT*/}
        <div className="mt-[-70px] flex basis-1/2 flex-col text-left">
          <h1 className="text-[180px] font-bold">YCLUB</h1>
          <h2 className="mt-[-20px] text-[40px] font-bold">
            JULY 31 &#160;
            <span className="bg-gradient-to-b from-purple-2 via-purple-3 to-purple-2 bg-clip-text text-white-1 text-opacity-[0%]">
              2022
            </span>
          </h2>
          <h2 className="mt-[256px] flex text-[64px] font-bold leading-[81.66px]">
            JOIN &#160;
            <a target="_blank" href="https://discord.gg/yclub" className="flex">
              <img
                src="./images/HeroSection/discord_big_logo.svg"
                className="mr-[15px]"
              />
              <span className="bg-gradient-to-r from-blue-2 to-pink-2 bg-clip-text bg-pos-0 hover:bg-pos-100 duration-700 bg-size-200 transition-all text-white-1 text-opacity-[0%]">
                DISCORD
              </span>
            </a>
          </h2>
          <h2 className="flex text-[64px] font-bold leading-[81.66px]">
            FOR WHITELIST INFO
          </h2>
        </div>
        {/*DIV GIF*/}
        <div className="flex basis-1/2">
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
