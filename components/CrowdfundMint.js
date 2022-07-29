const CrowdfundMint = () => {
    return (
      <div className="flex lg:flex-row flex-col relative 
                      lg:mt-[270px] mt-[110px] lg:pb-[70px] pb-[200px]
                      text-white-1 font-Plus lg:m-none m-[16px]">
        {/*DESKTOP-PICTURE*/}
            <div className="lg:flex hidden basis-1/2"/> 
            <div className="lg:flex hidden">
                <img src="./images/Crowdfund/yacht_image.png"
                     className="absolute left-[-20px] top-[-270px]"/>  
            </div>

         {/*TEXT*/}
            <div className="flex relative z-20 flex-col mt-5 lg:basis-auto
                            lg:ml-[200px] space-y-[30px]"> 
                <h1 className="lg:text-[96px] text-[36px] lg:font-semibold font-extrabold lg:leading-[120px] leading-[45px]"> 
                    Super Yacht Crowdfund Mint
                </h1>
                <h2 className="lg:text-[40px] text-[28px] font-bold font-Grotesk leading-[40.5px] tracking-[-2%] lg:w-auto w-[340px]">
                    WINTER&#160; 
                    <span className="bg-gradient-to-r from-blue-2 to-pink-2 bg-clip-text text-white-1 text-opacity-[0%]">
                         2022-2023, DUBAI 
                    </span>
                </h2>
                <p className="lg:text-[18px] text-[16px] font-normal">
                    More information soon...
                </p>        
            </div>
            {/*MOBILE-PICTURE*/}
            <div className="flex lg:hidden">
                <img src="./images/Crowdfund/yacht_image.png"
                     className="absolute top-[280px] w-full right-[20px]"/>  
            </div>
            
      </div>
    );
  };

  export default CrowdfundMint;