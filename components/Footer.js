const Footer = () => {
  return (
    <footer className="relative z-50 lg:pb-0 pb-10">
      <div className="flex items-center justify-between border-t border-white-1 border-opacity-50 p-8 lg:px-14 px-4 font-Grotesk text-gray-1">
        <a href="/">
          <img
            className="cursor-pointer"
            src="/images/yClubLogo.svg"
            alt="logotype"
          ></img>
        </a>
        {/*--menu-items--*/}
        <div className="lg:flex hidden animate-bounce space-x-8 pl-36 font-Grotesk">
          <a href='#hero'>
            <img
              className="cursor-pointer"
              src="/images/footerArrow.svg"
              alt="logotype"
            ></img>
          </a>
        </div>

        <div className="flex lg:flex-row flex-col lg:space-x-8 lg:space-y-0  space-y-7 font-Grotesk lg:text-sm text-xs">
          <a
            className="transition-all duration-700 hover:text-white-1"
            href="#howItworks"
          >
            YCLUB.IO™ 
          </a>
          <p className="lg:flex hidden"> | </p>
          <a
            className="transition-all duration-700 hover:text-white-1"
            href="#faq"
          >
            ALL RIGHT RESERVED 2022
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
