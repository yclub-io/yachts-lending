const Footer = () => {
  return (
    <footer className="relative z-50">
      <div className="flex items-center justify-between border-t border-white-1 border-opacity-50 p-8 px-14 font-Grotesk text-white-1 antialiased">
        <a href="/">
          <img
            className="cursor-pointer"
            src="/images/yClubLogo.svg"
            alt="logotype"
          ></img>
        </a>
        {/*--menu-items--*/}
        <div className="flex animate-bounce space-x-8 pl-36 font-Grotesk text-sm">
          <a href='#hero'>
            <img
              className="cursor-pointer"
              src="/images/footerArrow.svg"
              alt="logotype"
            ></img>
          </a>
        </div>

        <div className="flex space-x-8 font-Grotesk text-sm">
          <a
            className="transition-all duration-700 hover:text-white-1"
            href="#howItworks"
          >
            Privacy Policy
          </a>
          <a
            className="transition-all duration-700 hover:text-white-1"
            href="#faq"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
