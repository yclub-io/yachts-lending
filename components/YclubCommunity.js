const YclubCommunity = () => {
  return (
    <div className="lg:mx-14 mx-4 lg:mt-[200px] mt-[130px] flex flex-col text-white-1">
      <p className="lg:mb-[45px] mb-[35px] font-Plus lg:text-[96px] text-4xl lg:font-semibold font-extrabold lg:text-left text-center">
        YCLUB Community
      </p>

    {/*Desktop version*/}
      <div className="flex flex-col ">
        
        <p className="lg:mt-[20px] mt-[10px] lg:text-[18px] text-[15px] lg:text-left text-center "> 
          Follow our twitter &#38; Join our discord
        </p>

        <div className="flex flex-wrap
                        lg:mt-[64px] mt-[30px] lg:space-x-[100px] space-x-[30px]
                        font-Grotesk lg:text-4xl text-[26px] font-normal lg:justify-start justify-center">
          <a href="https://twitter.com/yclub_io" target="_blank">
            <p className="flex">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="lg:mr-[15px] mr-[10px]"/>
              twitter
            </p>
          </a>
          <a href="https://discord.gg/yclub" target="_blank">
            <p className="flex">
             <img src="./images/YclubCommunity/share_arrow.svg"
                  className="lg:mr-[15px] mr-[10px]"/>
              discord
            </p>
          </a>
          <a href="https://t.me/yachtsnftclub" target="_blank">
            <p className="flex">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="lg:mr-[15px] mr-[10px]"/>
              instagram
            </p>
          </a>
          <a href="https://t.me/yachtsnftclub" target="_blank">
            <p className="flex">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="lg:mr-[15px] mr-[10px]"/>
              reddit
            </p>
          </a>
        </div>
      </div>



    </div>
  );
};

export default YclubCommunity;
