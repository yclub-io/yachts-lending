import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-center border-b border-white-1 border-opacity-50 p-8 px-4 font-Grotesk text-white-1 lg:justify-between lg:px-14 ">
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
        <div className="hidden space-x-8  pl-36 font-Grotesk text-sm lg:flex">
          <a target="_blank" href="https://docs.yclub.io/">
            Docs
          </a>
          <a href="#roadmap">Roadmap</a>
          <a href="#team">Team</a>
          <a href="#vision">The Vision</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="hidden space-x-8 font-Grotesk text-sm lg:flex">
          <a
            className="transition-all duration-700 hover:text-white-1"
            href="https://discord.gg/MYfrX4Cu"
            target="_blank"
          >
            Discord
          </a>
          <a
            className="transition-all duration-700 hover:text-white-1"
            href="https://twitter.com/yclub_io"
            target="_blank"
          >
            Twitter
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/yclub.io/"
            className="transition-all duration-700 hover:text-white-1"
          >
            Instagram
          </a>
        </div>

        {isMobileMenuVisible && (
          <MobileMenu setMobileMenuVisible={setMobileMenuVisible} />
        )}
      </div>
    </nav>
  );
};

export default Header;
