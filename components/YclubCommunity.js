const YclubCommunity = () => {
  return (
    <div className="lg:mx-14 mx-4 lg:mt-[200px] mt-[130px] flex flex-col text-white-1">
      <p className="lg:mb-[45px] mb-[35px] font-Plus lg:text-[96px] text-4xl lg:font-semibold font-extrabold lg:text-left text-center">
        YCLUB Community
      </p>

    
      <div className="flex flex-col">
        
        <p className="lg:mt-[20px] mt-[10px] lg:text-[18px] text-[15px] lg:text-left text-center "> 
          Follow our twitter &#38; Join our discord
        </p>


        {/*Desktop version*/}
        <div className="lg:flex hidden flex-row lg:mx-0 mx-auto justify-center 
                        lg:mt-[64px] mt-[30px] lg:space-x-[100px]
                        font-Grotesk lg:text-4xl text-[26px] font-normal lg:justify-start">
          <a href="https://twitter.com/yclub_io" target="_blank">
            <p className="flex
                          duration-700 transition-all hover:text-gray-1">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="lg:mr-[15px] mr-[10px] lg:max-w-[28px] max-w-[17px]"/>
              twitter
            </p>
          </a>
          <a href="https://discord.gg/yclub" target="_blank">
            <p className="flex
                          duration-700 transition-all hover:text-gray-1">
             <img src="./images/YclubCommunity/share_arrow.svg"
                  className="lg:mr-[15px] mr-[10px] lg:max-w-[28px] max-w-[17px]"/>
              discord
            </p>
          </a>
          <a href="https://t.me/yachtsnftclub" target="_blank">
            <p className="flex
                          duration-700 transition-all hover:text-gray-1">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="lg:mr-[15px] mr-[10px] lg:max-w-[28px] max-w-[17px]"/>
              instagram
            </p>
          </a>
          <a href="https://t.me/yachtsnftclub" target="_blank">
            <p className="flex 
                          mr-[70px]
                          duration-700 transition-all hover:text-gray-1">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="lg:mr-[15px] mr-[10px] lg:max-w-[28px] max-w-[17px]"/>
              reddit
            </p>
          </a>
        </div>

        {/*Mobile version*/}
        <div className="lg:hidden flex flex-row lg:mx-0 mx-auto justify-center 
                        mt-[30px] 
                        font-Grotesk  text-[26px] font-normal">
          <div className="mr-[40px]"> 
          <a href="https://twitter.com/yclub_io" target="_blank">
            <p className="flex 
                          mb-[30px]
                          duration-700 transition-all hover:text-gray-1">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="lg:mr-[15px] mr-[10px] lg:max-w-[28px] max-w-[17px]"/>
              twitter
            </p>
          </a>
          <a href="https://discord.gg/yclub" target="_blank">
            <p className="flex
                          duration-700 transition-all hover:text-gray-1">
             <img src="./images/YclubCommunity/share_arrow.svg"
                  className="lg:mr-[15px] mr-[10px] lg:max-w-[28px] max-w-[17px]"/>
              discord
            </p>
          </a>
          </div>

          <div>
          <a href="https://t.me/yachtsnftclub" target="_blank">
            <p className="flex
                          mb-[30px]
                          duration-700 transition-all hover:text-gray-1">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="lg:mr-[15px] mr-[10px] lg:max-w-[28px] max-w-[17px]"/>
              instagram
            </p>
          </a>
          <a href="https://t.me/yachtsnftclub" target="_blank">
            <p className="flex 
                          mr-[70px]
                          duration-700 transition-all hover:text-gray-1">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="lg:mr-[15px] mr-[10px] lg:max-w-[28px] max-w-[17px]"/>
              reddit
            </p>
          </a>
          </div>
        </div>

      </div>

      



    </div>
  );
};

export default YclubCommunity;
