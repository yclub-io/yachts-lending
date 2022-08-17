import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav className="fixed z-50 w-full  bg-black-1 font-Grotesk text-white-1  lg:w-[1440px]">
      <div
        className="flex items-center justify-center border-b
                      border-white-1 border-opacity-50 py-8
                      px-4 lg:justify-between lg:px-14"
      >
        <Link href="/">
          <a>
            <img
              className="w-[70px] cursor-pointer lg:w-[96px]"
              src="/images/yClubLogo.svg"
              alt="logotype"
            ></img>
          </a>
        </Link>
        <img
          className="absolute right-[20px] w-[40px] cursor-pointer lg:hidden"
          src="/images/mobileMenu.svg"
          onClick={() => setMobileMenuVisible(true)}
        />
        {/*--menu-items--*/}
        <div className="hidden space-x-8 pl-[40px] text-sm lg:flex">
          <a href="https://docs.yclub.io" target="_blank">
            Whitepaper
          </a>
          <Link href="/#tokonomics">
            <a>Tokenomics</a>
          </Link>
          <Link href="/#roadmap">
            <a>Roadmap</a>
          </Link>
          <Link href="/team">
            <a>Team</a>
          </Link>
        </div>

        {/*MINT button*/}
        <div className={`hidden w-[120px] text-[16px] font-semibold lg:flex  `}>
          <Link href="mint">
            <button
              className={`rounded-[50px] border border-pink-1 bg-pink-1 px-[51px] py-[16px] shadow-headerButton ${
                router.pathname === "/mint" && "hidden"
              }`}
            >
              Mint
            </button>
          </Link>
        </div>

        {isMobileMenuVisible && (
          <MobileMenu setMobileMenuVisible={setMobileMenuVisible}  hiddenMint={router.pathname === "/mint"}/>
        )}
      </div>
    </nav>
  );
};

export default Header;
