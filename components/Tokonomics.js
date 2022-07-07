const Tokonomics = () => {
    return (
      <>
        <div id='hero' className="mx-8 mt-[140px] tracking-[-2%] font-Grotesk text-white-1">
          {/*HEADING*/}
          
            <h1 className="flex flex-col font-semibold text-[96px] font-Plus"> 
              Tokenomics
              <span className="text-[36px] font-Plus">
                 SYC 
              </span>
            </h1>
        
            <div className="flex">
             {/*DIV STATS*/}
              <div className="flex flex-col basis-1/2 mt-[74px] text-[14px] font-light">
                <p>
                 MAXIMUM SUPPLY 
                </p>

                <p className="text-[64px] font-bold text-white-1 bg-gradient-to-r from-blue-2 to-pink-2 bg-clip-text text-opacity-[0%]">
                 100 000 000
                </p>

                <div className="mt-[80px]">
                <p>
                 INITIAL SUPPLY
                </p>

                <p className="text-[64px] font-bold">
                 13 100 000
                </p>
                </div>

              </div>
            
            {/*DIV PIE*/}
                <div className="flex basis-1/2">
                    <img src="./images/Tokonomics/tokonomics_chart.svg"/>

                </div>          
             </div>
        </div>
      </>
    );
  };
  
  export default Tokonomics;