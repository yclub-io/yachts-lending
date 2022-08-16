const HeroMint = () => {
  return (
    <div
      className="lg:mx-[60px] mx-[16px] lg:mt-[90px] mt-[40px]
                        flex flex-col border-b
                       border-white-1 border-opacity-[50%] pb-[48px]
                       font-Grotesk tracking-[-2%] text-white-1"
    >
      {/*HEADING*/}
      <h1 className="flex lg:text-[100px] text-[46px]  tracking-[-2%] font-bold">YCLUB dNFT</h1>
      <p
        className="lg:mt-[-10px]
                          lg:text-[20px] text-[16px] tracking-[-2%] font-medium"
      >
        107m/351&#x2019; Motor Yacht Lana dNFT Collection
      </p>

      {/*Total-items-n-Price-n-Links*/}
      <div
        className="mt-[44px] flex lg:flex-row flex-col
                            justify-between"
      >
        <div className="flex text-[14px] font-light tracking-[10%]">
          <h1 className="mr-[40px]">
            TOTAL ITEMS&#160;
            <span className="font-medium">7000</span>
          </h1>

          <h1>
            Price From
            <span className="font-medium"> 0.12 </span>
            ETH
          </h1>
        </div>

        {/*ICONs*/}
        <div
          className="flex space-x-[20px] lg:mt-[0] mt-[30px] lg:mb-0 mb-[-10px] items-center"
        >
          <a href="https://discord.gg/yclub" target="_blank">
          <img className="max-w-[26px] hover:opacity-70 duration-700" src="./images/Mint/discord_Icon.svg" />
          </a>
          <a href="https://twitter.com/yclub_io" target="_blank">
          <img className="max-w-[26px] hover:opacity-70 duration-700" src="./images/Mint/twitter_Icon.svg" />
          </a>
          <a href="https://www.instagram.com/yclub.io" target="_blank">
          <img className="max-w-[26px] hover:opacity-70 duration-700" src="./images/Mint/inst_Icon.svg" />
          </a>
          <a href="https://medium.com/@yclub/welcome-to-yclub-fb8b2e4af351" target="_blank">
          <img className="max-w-[26px] hover:opacity-70 duration-700" src="./images/Mint/reddit_Icon.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroMint;
