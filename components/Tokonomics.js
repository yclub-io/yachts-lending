const Tokonomics = () => {
    return (
      <>
        <div id='tokonomics' className="hidden mx-8 relative z-20 lg:mt-[140px] tracking-[-2%] font-Grotesk text-white-1">
          {/*HEADING*/}
          
          <div className="flex flex-col">
            <h1 className="lg:font-semibold font-extrabold lg:text-[96px] text-[36px] font-Plus"> 
              Tokenomics
              
            </h1>
            <span className="lg:text-[36px] text-[24px] font-semibold font-Plus">
                 $SYC 
              </span>
              </div>
        
            <div className="flex lg:flex-row flex-col">
             {/*DIV STATS*/}
              <div className="flex md:m-auto flex-col lg:basis-1/2 lg:mt-[74px] mt-[60px] lg:text-[14px] text-[12px] font-light">
                <p>
                 MAXIMUM SUPPLY 
                </p>

                <p className="lg:text-[64px] text-[48px] font-bold text-white-1 bg-gradient-to-r from-blue-2 to-pink-2 bg-clip-text text-opacity-[0%]">
                  TBA
                </p>

                <div className="lg:mt-[80px] mt-[60px]">
                <p className="lg:text-[14px] text-[12px]">
                 INITIAL SUPPLY
                </p>

                <p className="lg:text-[64px] text-[48px] font-bold">
                  13.1%
                </p>
                </div>

              </div>
            
            {/*DESKTOP DIV PIE*/}
                <div className="lg:flex hidden basis-1/2">
                    <img src="./images/Tokonomics/tokonomics_chart2.svg"/>

                </div> 

            {/*MOBILE DIV PIE*/}
              <div className="flex md:m-auto lg:hidden mt-[47px] mx-auto">
                    <img src="./images/Tokonomics/pie_chart_plus_info3.svg"/>
              </div>            
             </div>
        </div>
      </>
    );
  };
  
  export default Tokonomics;