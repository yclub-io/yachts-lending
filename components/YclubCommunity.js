const YclubCommunity = () => {
  return (
    <div className="lg:mx-14 mx-4 mt-[200px] flex flex-col text-white-1">
      <p className="lg:mb-[45px] mb-[35px] font-Plus lg:text-[96px] text-4xl lg:font-semibold font-extrabold  lg:text-left text-center">
        YCLUB Community
      </p>

    {/*Desktop version*/}
      <div className="lg:flex hidden flex-col ">
        
        <p className="mt-[20px]"> 
          Follow our twitter &#38; Join our discord
        </p>

        <div className="flex flex-row 
                        mt-[64px] space-x-[100px]
                        font-Grotesk text-4xl font-normal">
          <a href="https://twitter.com/yclub_io" target="_blank">
            <p className="flex">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="mr-[15px]"/>
              twitter
            </p>
          </a>
          <a href="https://discord.gg/yclub" target="_blank">
            <p className="flex">
             <img src="./images/YclubCommunity/share_arrow.svg"
                  className="mr-[15px]"/>
              discord
            </p>
          </a>
          <a href="https://t.me/yachtsnftclub" target="_blank">
            <p className="flex">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="mr-[15px]"/>
              instagram
            </p>
          </a>
          <a href="https://t.me/yachtsnftclub" target="_blank">
            <p className="flex">
              <img src="./images/YclubCommunity/share_arrow.svg"
                   className="mr-[15px]"/>
              reddit
            </p>
          </a>
        
       
         
        </div>
      </div>

    {/*Mobile version*/} 
      <div className="lg:hidden flex flex-col">  
      <div className="py-[30px] flex text-center justify-center font-Grotesk text-base font-normal border-t border-white-1">
          <p>Follow out twitter &amp;
          Join our discord </p>
     </div>
     <div className="flex flex-row text-center justify-center border-t border-white-1"> 
     <div className=" py-[30px] flex basis-1/2 border-r justify-center font-Grotesk text-[26px] font-normal">  
     <a href="https://twitter.com/yclub_io" target="_blank">
        <p> 
           twitter </p>
    </a>
        </div> 
        
      <div className="py-[30px] flex basis-1/2 justify-center font-Grotesk text-[26px] font-normal">  
      <a href="https://discord.gg/yclub" target="_blank">
        <p> discord </p>
      </a>
      </div>
     </div>
     <div className="py-[30px] flex text-center justify-center font-Grotesk text-[26px] font-normal border-t border-b border-white-1">
     <a href="https://t.me/yachtsnftclub" target="_blank">
          <p> telegram </p>
      </a>
     </div>



      </div>


    </div>
  );
};

export default YclubCommunity;
