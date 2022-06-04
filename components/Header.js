const Header = () => {
    return ( 

<nav className="relative z-50">
        <div className="flex items-center justify-between p-8 px-14 border-white-1 border-opacity-50 border-b font-Grotesk antialiased text-white-1"> 
          <a href="/">
            <img
              className="cursor-pointer"
              src="/images/yClubLogo.svg"
              alt="logotype"
            ></img>
          </a>
          {/*--menu-items--*/}
          <div className="flex  pl-36 space-x-8 font-Grotesk text-sm">
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

          <div className="flex space-x-8 font-Grotesk text-sm">
            <a
              className="hover:text-white-1 transition-all duration-700"
              href=""
            >
              Discord
            </a>
            <a
              className="hover:text-white-1 transition-all duration-700"
              href=""
            >
              Twitter
            </a>
            <a
              target=""
              href=""
              className="hover:text-white-1 transition-all duration-700"
            >
              Instagram
            </a>
          </div>
          
          
        </div>
      </nav>




     );
}
 
export default Header;