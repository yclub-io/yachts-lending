import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  return (
    <nav className="relative z-50 font-Grotesk  text-white-1">
      <div className="flex justify-center lg:justify-between items-center
                      py-8 px-4 lg:px-14
                      border-b border-white-1 border-opacity-50">
        <a href="/">
          <img
            className="w-[70px] cursor-pointer lg:w-[96px]"
            src="/images/yClubLogo.svg"
            alt="logotype"
          ></img>
        </a>
        <img
          className="absolute right-[20px] w-[40px] cursor-pointer lg:hidden"
          src="/images/mobileMenu.svg"
          onClick={() => setMobileMenuVisible(true)}
        />
        {/*--menu-items--*/}
        <div className="hidden space-x-8 pl-[40px] text-sm lg:flex">
          <a href="#roadmap">Roadmap</a>
          <a href="#team">Team</a>
          <a href="">Whitepaper</a>
          <a href="">Tokonomics</a>
        </div>

        {/*MINT button*/}
        <div className="hidden lg:flex text-[16px] font-semibold">
          <button className="px-[51px] py-[16px]
                             bg-pink-1 border border-pink-1 rounded-[50px] shadow-headerButton">
            Mint

          </button>
        </div>

        {isMobileMenuVisible && (
          <MobileMenu setMobileMenuVisible={setMobileMenuVisible} />
        )}
      </div>
    </nav>
  );
};

export default Header;
