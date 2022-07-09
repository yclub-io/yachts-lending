const CrowdfundMint = () => {
    return (
      <div className="flex relative 
                      mt-[270px]
                      text-white-1 font-Plus">
        {/*PICTURE*/}
            <div className="flex basis-1/2"/> 
            <div>
                <img src="./images/Crowdfund/crowdfund_yacht_image.svg"
                     className="absolute left-[-20px] top-[70px]"/>
                
            </div>

         {/*TEXT*/}
            <div className="flex relative flex-col basis-auto
                            ml-[200px] space-y-[30px]"> 
                <h1 className="text-[96px] font-semibold leading-[120px]"> 
                    Super Yacht Crowdfund Mint
                </h1>
                <h2 className="text-[40px] font-bold font-Grotesk leading-[40.5px] tracking-[-2%]">
                    WINTER 
                    <span className="bg-gradient-to-r from-blue-2 to-pink-2 bg-clip-text text-white-1 text-opacity-[0%]"> 2022-2023, DUBAI </span>
                </h2>
                <p className="text-[18px] font-normal">
                    More information soon...
                </p>
                    
            </div>
            
      </div>
    );
  };

  export default CrowdfundMint;