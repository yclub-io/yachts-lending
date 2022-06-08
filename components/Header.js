import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
    return ( 
<nav className="relative z-50">
        <div className="flex items-center lg:justify-between justify-center p-8 lg:px-14 px-4 border-white-1 border-opacity-50 border-b font-Grotesk text-white-1 bg-black-1"> 
          <a href="/">
            <img
              className="cursor-pointer"
              src="/images/yClubLogo.svg"
              alt="logotype"
            ></img>
          </a>
            <img
              className="cursor-pointer lg:hidden absolute right-[20px] w-[40px]"
              src="/images/mobileMenu.svg"
              onClick={() => setMobileMenuVisible(true)}
            />
          {/*--menu-items--*/}
          <div className="hidden lg:flex  pl-36 space-x-8 font-Grotesk text-sm">
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#roadmap"
            >
              RoadMap
            </a>
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#team"
            >
              Team
            </a>
            <a
              target=""
              href=""
              className="hover:text-white-1 transition-all duration-700"
            >
              Whitepaper
            </a>
            <a
              target=""
              href=""
              className="pr-7 hover:text-white-1 transition-all duration-700"
            >
              Tokonomics
            </a>
          </div>

          <div className="hidden lg:flex space-x-8 font-Grotesk text-sm">
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="https://discord.gg/MYfrX4Cu" target="_blank"
            >
              Discord
            </a>
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="https://twitter.com/yclub_io" target="_blank"
            >
              Twitter
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/yclub.io/"
              className="hover:text-white-1 transition-all duration-700"
            >
              Instagram
            </a>
          </div>
          
          {isMobileMenuVisible && <MobileMenu setMobileMenuVisible={setMobileMenuVisible} />}
          
        </div>
      </nav>




     );
}
 
export default Header;