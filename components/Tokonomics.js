const Tokonomics = () => {
    return (
      <>
        <div id='tokonomics' className="mx-8 relative z-20 lg:mt-[140px] tracking-[-2%] font-Grotesk text-white-1">
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
                 100 000 000
                </p>

                <div className="lg:mt-[80px] mt-[60px]">
                <p className="lg:text-[14px] text-[12px]">
                 INITIAL SUPPLY
                </p>

                <p className="lg:text-[64px] text-[48px] font-bold">
                 13 100 000
                </p>
                </div>

              </div>
            
            {/*DESKTOP DIV PIE*/}
                <div className="lg:flex hidden basis-1/2">
                    <img src="./images/Tokonomics/tokonomics_chart.svg"/>

                </div> 

            {/*MOBILE DIV PIE*/}
              <div className="flex md:m-auto lg:hidden mt-[47px] relative mx-auto">
                    <img className="absolute z-40 right-[-20px] top-[-35px] min-w-[395px]" src="./images/Tokonomics/tokenomics_chart_2.svg" />
                    <div className="absolute z-20 inset-0  bg-black-1 w-[600] h-[350px]"/>
                    <img src="./images/Tokonomics/pie_chart_plus_info.svg"/>
                    {/* <img src="./images/Tokonomics/chart_mobile.png"/> */}

              </div>            
             </div>
        </div>
      </>
    );
  };
  
  export default Tokonomics;