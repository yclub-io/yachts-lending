const Footer = () => {
  return (
    <footer className="relative lg:pb-0 pb-10">
      <div className="flex flex-col items-center justify-between border-t border-white-1 border-opacity-50 p-8 lg:px-14 px-4 font-Grotesk text-gray-1">
        {/*LOGOTYPE*/}
        <a href="/">
          <img
            className="cursor-pointer"
            src="/images/yClubLogo.svg"
            alt="logotype"
          ></img>
        </a>

        {/*--menu-items--*/}
        <div className="absolute right-[20px] top-[50px]">
          <a href='#hero'>
            <img
              className="cursor-pointer"
              src="/images/footerArrow.svg"
              alt="logotype"
            ></img>
          </a>
        </div>

        <div className="mt-[30px] flex lg:flex-row flex-col lg:space-x-8 lg:space-y-0  space-y-7 font-Grotesk lg:text-sm text-xs">
          <a
            className="transition-all duration-700 hover:text-white-1"
            href=""
          >
            Privacy Policy 
          </a>
          
          <a
            className="transition-all duration-700 hover:text-white-1"
            href="#faq"
          >
            Terms &#38; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
