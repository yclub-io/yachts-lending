const Team = () => {
  return (
    <div id='team' className="lg:mx-14 mx-4 text-white-1">
      <p className="lg:mb-[125px] mb-[68px] flex justify-center text-center font-Plus lg:text-5xl text-[26px] font-extrabold">
        Team
      </p>

        <div className="flex lg:flex-row flex-col lg:gap-[15px] gap-y-[45px]">

          {/*member 1*/}
            <div className="flex border border-white-1 rounded-[20px] basis-1/5 flex-col font-Grotesk text-center h-[355px] px-1"> 
                <p className="font-bold text-[28px] pt-[50px]"> 
                  Neptune
                </p>
                    <p className="text-sm text-gray-1 pt-[25px]"> 
                      Founder
                    </p>
                      
                      <img
                        className="w-8 mx-auto py-[20px]"
                        src="/images/teamSectionInfDivider.svg"
                        alt="divider"
                      ></img>
                    
                        <p className="w-[245px] mx-auto text-base text-gray-1 leading-[20px] pb-[60px]"> 
                          Basically born on a Super Yacht, 
                          years of experience in helping 
                          to curate and market extravagant 
                          experiences for those chartering 
                          these vessels of extravagance.  
                        </p>
            </div>

          {/*member 2*/}
          <div className="flex border border-white-1 rounded-[20px] basis-1/5 flex-col font-Grotesk text-center h-[355px] px-1"> 
                <p className="font-bold text-[28px] pt-[50px]"> 
                  Mega Skipper
                </p>
                    <p className="text-sm text-gray-1 pt-[25px]"> 
                      Campaigns
                    </p>
                      
                      <img
                        className="w-8 mx-auto py-[20px]"
                        src="/images/teamSectionInfDivider.svg"
                        alt="divider"
                      ></img>
                    
                        <p className="w-[245px] mx-auto text-base text-gray-1 leading-[20px] pb-[60px]"> 
                        Ex VP of digital in largest Israeli
                        advertising agency with 25 years of
                        experience in online advertising.   
                        </p>
            </div>

          {/*member 3*/}
          <div className="flex border border-white-1 rounded-[20px] basis-1/5 flex-col font-Grotesk text-center h-[355px] px-1"> 
                <p className="font-bold text-[28px] pt-[50px]"> 
                  Blade
                </p>
                    <p className="text-sm text-gray-1 pt-[25px]"> 
                      Strategies
                    </p>
                      
                      <img
                        className="w-8 mx-auto py-[20px]"
                        src="/images/teamSectionInfDivider.svg"
                        alt="divider"
                      ></img>
                    
                        <p className="w-[245px] mx-auto text-base text-gray-1 leading-[20px] pb-[60px]"> 
                        Engineered for several Fortune 500 companies
                        in a variety of technology related roles while
                        building his website into the top 1000 most
                        visited websites in the world. 
                        </p>
            </div>

          {/*member 4*/}
          <div className="flex border border-white-1 rounded-[20px] basis-1/5 flex-col font-Grotesk text-center h-[355px] px-1"> 
                <p className="font-bold text-[28px] pt-[50px]"> 
                  Cobra
                </p>
                    <p className="text-sm text-gray-1 pt-[25px]"> 
                      Marketing
                    </p>
                      
                      <img
                        className="w-8 mx-auto py-[20px]"
                        src="/images/teamSectionInfDivider.svg"
                        alt="divider"
                      ></img>
                    
                        <p className="w-[245px] mx-auto text-base text-gray-1 leading-[20px] pb-[60px]"> 
                        10 years of experience helping E-commerce brands
                        launch and scale while generating over a billion
                        dollars in sales for some of the world's retail giants. 
                        </p>
            </div>

          {/*member 5*/}
          <div className="flex border border-white-1 rounded-[20px] basis-1/5 flex-col font-Grotesk text-center h-[355px] px-1"> 
                <p className="font-bold text-[28px] pt-[50px]"> 
                  Poseidon
                </p>
                    <p className="text-sm text-gray-1 pt-[25px]"> 
                      Operations
                    </p>
                      
                      <img
                        className="w-8 mx-auto py-[20px]"
                        src="/images/teamSectionInfDivider.svg"
                        alt="divider"
                      ></img>
                    
                        <p className="w-[245px] mx-auto text-base text-gray-1 leading-[20px] lg:pb-0 pb-[60px]"> 
                        Chief Operations Officer in many successful start ups.
                        I always say there is no bad business there is a bad operation. 
                        </p>
            </div>

  
        </div>
     
    </div>
  );
};

export default Team;
