import Button from "../TW_components /Button";

const YclubCommunity = () => {
  return (
    <div className="mx-4 my-[130px] flex flex-col text-white-1 lg:mx-14 lg:my-[200px]">
      <p className="hidden mb-[35px] text-center font-Plus text-4xl font-extrabold lg:mb-[45px] lg:text-left lg:text-[96px] lg:font-semibold">
        YCLUB Community
      </p>

      <div className="flex flex-col">
        <p className="hidden mt-[10px] text-center text-[15px] lg:mt-[20px] lg:text-left lg:text-[18px] ">
          Follow our twitter &#38; Join our discord
        </p>


      <div className="flex justify-center">
        <a href="/mint"> 
        <button className="bg-pink-1 justify-center  cursor-pointer font-Grotesk
                           font-semibold text-[24px] text-white-1 rounded-[50px]  lg:w-[532.13px] w-[350px] h-[67px]">
          PRESALE
        </button>
        </a>

      </div>
        {/*Desktop version*/}
        <div
          className="mx-auto mt-[30px] hidden flex-row justify-center font-Grotesk 
                        text-[26px] font-normal lg:mx-0
                        lg:mt-[164px] lg:flex lg:space-x-[100px] lg:text-4xl"
        >
          <a href="https://docs.yclub.io" target="_blank">
            <p
              className="flex
                          transition-all duration-700 hover:text-gray-1"
            >
              <img
                src="./images/YclubCommunity/share_arrow.svg"
                className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
              />
              whitepaper
            </p>
          </a>
          <a href="https://twitter.com/yclub_io" target="_blank">
            <p
              className="flex
                          transition-all duration-700 hover:text-gray-1"
            >
              <img
                src="./images/YclubCommunity/share_arrow.svg"
                className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
              />
              twitter
            </p>
          </a>
          <a href="https://t.me/yclub_official" target="_blank">
            <p
              className="flex
                          transition-all duration-700 hover:text-gray-1"
            >
              <img
                src="./images/YclubCommunity/share_arrow.svg"
                className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
              />
              telegram
            </p>
          </a>
          <a href="https://www.instagram.com/yclub.io" target="_blank">
            <p
              className="mr-[70px] 
                          flex
                          transition-all duration-700 hover:text-gray-1"
            >
              <img
                src="./images/YclubCommunity/share_arrow.svg"
                className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
              />
              instagram
            </p>
          </a>
        </div>

        {/*Mobile version*/}
        <div
          className="hidden mx-auto mt-[30px] flex-row justify-center font-Grotesk 
                        text-[26px] 
                        font-normal  lg:mx-0 lg:hidden"
        >
          <div className="mr-[10px]">
            <a href="https://docs.yclub.io" target="_blank">
              <p
                className="mb-[30px] 
                          flex
                          transition-all duration-700 hover:text-gray-1"
              >
                <img
                  src="./images/YclubCommunity/share_arrow.svg"
                  className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
                />
                 whitepaper
              </p>
            </a>
            <a href="https://twitter.com/yclub_io" target="_blank">
              <p
                className="flex
                          transition-all duration-700 hover:text-gray-1"
              >
                <img
                  src="./images/YclubCommunity/share_arrow.svg"
                  className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
                />
                twitter
              </p>
            </a>
          </div>

          <div>
            <a href="https://t.me/yclub_official" target="_blank">
              <p
                className="mb-[30px]
                          flex
                          transition-all duration-700 hover:text-gray-1"
              >
                <img
                  src="./images/YclubCommunity/share_arrow.svg"
                  className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
                />
                 telegram
              </p>
            </a>
            <a href="https://www.instagram.com/yclub.io" target="_blank">
              <p
                className="
                          flex
                          transition-all duration-700 hover:text-gray-1"
              >
                <img
                  src="./images/YclubCommunity/share_arrow.svg"
                  className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
                />
                instagram
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YclubCommunity;
