

const Header = () => {
  return (
    <div>
      <nav className="relative">
        <div className="flex items-center justify-between p-8 border-white-1 border-opacity-50 border-b"> 
          <a href="/">
            <img
              className="h-10 mt-2 cursor-pointer"
              src="/images/yClubLogo.svg"
              alt="logotype"
            ></img>
          </a>
          {/*--menu-items--*/}
          <div className="flex space-x-7 text-base font-Roboto antialiased text-white-1 text-opacity-80">
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#howItworks"
            >
              RoadMap
            </a>
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#faq"
            >
              Team
            </a>
            <a
              target="_blank"
              href="https://docs.algem.io/"
              className="hover:text-white-1 transition-all duration-700"
            >
              Whitepaper
            </a>
            <a
              target="_blank"
              href="https://medium.com/@algem"
              className="pr-7 hover:text-white-1 transition-all duration-700"
            >
              Tokonomics
            </a>
          </div>

          <div className="flex space-x-7 text-base font-Roboto antialiased text-white-1 text-opacity-80">
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#howItworks"
            >
              Discord
            </a>
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#faq"
            >
              Twitter
            </a>
            <a
              target="_blank"
              href="https://docs.algem.io/"
              className="hover:text-white-1 transition-all duration-700"
            >
              Instagram
            </a>
          </div>
          
          
        </div>
      </nav>

    </div>
  );
};

export default Header;