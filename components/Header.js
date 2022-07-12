import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  return (
    <nav className="relative z-50 font-Grotesk  text-white-1">
      <div
        className="flex items-center justify-center border-b
                      border-white-1 border-opacity-50 py-8
                      px-4 lg:justify-between lg:px-14"
      >
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
          <a href="">Whitepaper</a>
          <a href="">Tokonomics</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#team">Team</a>
        </div>

        {/*MINT button*/}
        <div className="hidden text-[16px] font-semibold lg:flex">
          {/* <Link href="mint"> */}
            <button
              className="rounded-[50px] border
                             border-pink-1 bg-pink-1 px-[51px] py-[16px] shadow-headerButton"
            >
              Mint
            </button>
          {/* </Link> */}
        </div>

        {isMobileMenuVisible && (
          <MobileMenu setMobileMenuVisible={setMobileMenuVisible} />
        )}
      </div>
    </nav>
  );
};

export default Header;
