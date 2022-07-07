const HeroMint = () => {
    return (
        <div className="flex flex-col
                        mt-[90px] mx-[60px] pb-[48px]
                       border-white-1 border-b border-opacity-[50%]
                       text-white-1 tracking-[-2%] font-Grotesk">
            {/*HEADING*/}
            <h1 className="text-[100px] font-bold"> 
             YCLUB dNFT
            </h1>
            <p className="mt-[-10px]
                          text-[20px] font-medium">
                107m/351&#x2019; Motor Yacht Lana dNFT Collection
            </p>

            {/*Total-items-n-Price-n-Links*/}
            <div className="flex flex-row justify-between
                            mt-[44px]"> 
                    <div className="flex font-light text-[14px] tracking-[10%]">
                        <h1 className="mr-[40px]"> 
                            TOTAL ITEMS&#160;
                            <span className="font-medium">
                            7000
                            </span>
                        </h1>

                        <h1> 
                            TOTAL ITEMS&#160;
                            <span className="font-medium">
                            7000
                            </span>
                        </h1>
                    </div>

                {/*ICONs*/}
                <div className="flex
                                space-x-[20px]">
                    <img src="./images/Mint/discord_Icon.svg"/>
                    <img src="./images/Mint/twitter_Icon.svg"/>
                    <img src="./images/Mint/inst_Icon.svg"/>
                    <img src="./images/Mint/reddit_Icon.svg"/>
                </div>
            </div>
        </div>
    );
}
 
export default HeroMint;