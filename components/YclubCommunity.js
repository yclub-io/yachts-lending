const YclubCommunity = () => {
  return (
    <div className="mx-4 my-[130px] flex flex-col text-white-1 lg:mx-14 lg:my-[200px]">
      <p className="mb-[35px] text-center font-Plus text-4xl font-extrabold lg:mb-[45px] lg:text-left lg:text-[96px] lg:font-semibold">
        YCLUB Community
      </p>

      <div className="flex flex-col">
        <p className="mt-[10px] text-center text-[15px] lg:mt-[20px] lg:text-left lg:text-[18px] ">
          Follow our twitter &#38; Join our discord
        </p>

        {/*Desktop version*/}
        <div
          className="mx-auto mt-[30px] hidden flex-row justify-center font-Grotesk 
                        text-[26px] font-normal lg:mx-0
                        lg:mt-[64px] lg:flex lg:justify-start lg:space-x-[100px] lg:text-4xl"
        >
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
          <a href="https://discord.gg/yclub" target="_blank">
            <p
              className="flex
                          transition-all duration-700 hover:text-gray-1"
            >
              <img
                src="./images/YclubCommunity/share_arrow.svg"
                className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
              />
              discord
            </p>
          </a>
          <a href="https://www.instagram.com/yclub.io/" target="_blank">
            <p
              className="flex
                          transition-all duration-700 hover:text-gray-1"
            >
              <img
                src="./images/YclubCommunity/share_arrow.svg"
                className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
              />
              instagram
            </p>
          </a>
          <a href="https://www.reddit.com/r/YCLUB/" target="_blank">
            <p
              className="mr-[70px] 
                          flex
                          transition-all duration-700 hover:text-gray-1"
            >
              <img
                src="./images/YclubCommunity/share_arrow.svg"
                className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
              />
              reddit
            </p>
          </a>
        </div>

        {/*Mobile version*/}
        <div
          className="mx-auto mt-[30px] flex flex-row justify-center font-Grotesk 
                        text-[26px] 
                        font-normal  lg:mx-0 lg:hidden"
        >
          <div className="mr-[40px]">
            <a href="https://twitter.com/yclub_io" target="_blank">
              <p
                className="mb-[30px] 
                          flex
                          transition-all duration-700 hover:text-gray-1"
              >
                <img
                  src="./images/YclubCommunity/share_arrow.svg"
                  className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
                />
                twitter
              </p>
            </a>
            <a href="https://discord.gg/yclub" target="_blank">
              <p
                className="flex
                          transition-all duration-700 hover:text-gray-1"
              >
                <img
                  src="./images/YclubCommunity/share_arrow.svg"
                  className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
                />
                discord
              </p>
            </a>
          </div>

          <div>
            <a href="http://instagram.com/yclub.io" target="_blank">
              <p
                className="mb-[30px]
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
            <a href="https://www.reddit.com/r/YCLUB/" target="_blank">
              <p
                className="mr-[70px] 
                          flex
                          transition-all duration-700 hover:text-gray-1"
              >
                <img
                  src="./images/YclubCommunity/share_arrow.svg"
                  className="mr-[10px] max-w-[17px] lg:mr-[15px] lg:max-w-[28px]"
                />
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
