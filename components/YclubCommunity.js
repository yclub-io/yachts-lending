const YclubCommunity = () => {
  return (
    <div className="lg:mx-14 mx-4 lg:mt-[900px] mt-[100px] flex flex-col text-white-1">
      <p className=" z-40 lg:mb-[45px] mb-[35px] font-Plus lg:text-8xl text-4xl lg:font-semibold font-extrabold  lg:text-left text-center">
        YClub Community
      </p>

    {/*Desktop version*/}
      <div className="lg:flex hidden flex-row border-t border-b">
        <div className="flex w-[440px] flex-col pt-[60px] text-left font-Grotesk text-lg font-normal leading-[30px]">
          <p>Follow out twitter &amp;</p>
          <p>Join our discord</p>
        </div>
        <div className="flex w-[290px]  justify-center">
          <a href="https://twitter.com/yclub_io" target="_blank">
            <p className="border-l border-r py-[65px] px-[88px] font-Grotesk text-4xl font-normal">
              twitter
            </p>
          </a>
        </div>
        <div className="flex w-[290px]  justify-center">
          <a href="https://discord.gg/MYfrX4Cu" target="_blank">
            <p className=" border-r py-[65px] px-[88px] font-Grotesk text-4xl font-normal">
              discord
            </p>
          </a>
        </div>
        <div className="flex w-[290px]  justify-center">
          <a href="https://t.me/yachtsnftclub" target="_blank">
            <p className="py-[65px] ml-10 font-Grotesk text-4xl font-normal">
              telegram
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
      <a href="https://discord.gg/MYfrX4Cu" target="_blank">
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
