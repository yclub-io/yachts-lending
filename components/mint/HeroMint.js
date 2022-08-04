const HeroMint = () => {
  return (
    <div
      className="mx-[60px] mt-[90px]
                        flex flex-col border-b
                       border-white-1 border-opacity-[50%] pb-[48px]
                       font-Grotesk tracking-[-2%] text-white-1"
    >
      {/*HEADING*/}
      <h1 className="text-[100px] font-bold">YCLUB dNFT</h1>
      <p
        className="mt-[-10px]
                          text-[20px] font-medium"
      >
        107m/351&#x2019; Motor Yacht Lana dNFT Collection
      </p>

      {/*Total-items-n-Price-n-Links*/}
      <div
        className="mt-[44px] flex flex-row
                            justify-between"
      >
        <div className="flex text-[14px] font-light tracking-[10%]">
          <h1 className="mr-[40px]">
            TOTAL ITEMS&#160;
            <span className="font-medium">7000</span>
          </h1>

          <h1>
            Price From
            <span className="font-medium"> 0.25 </span>
            ETH
          </h1>
        </div>

        {/*ICONs*/}
        <div
          className="flex
                                space-x-[20px]"
        >
          <img src="./images/Mint/discord_Icon.svg" />
          <img src="./images/Mint/twitter_Icon.svg" />
          <img src="./images/Mint/inst_Icon.svg" />
          <img src="./images/Mint/reddit_Icon.svg" />
        </div>
      </div>
    </div>
  );
};

export default HeroMint;
