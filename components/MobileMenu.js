import Link from "next/link";

const MobileMenu = (props) => {
  return (
    <div className="fixed top-[-1px] right-0 z-50 h-[1000px] w-full bg-black-1">
      <div className=" text-white-1">
        <div className="flex justify-start">
          {/*--menu-close-button--*/}
          <a className="absolute top-[10px] right-[15px] mr-auto">
            <img
              className="w-[25px] cursor-pointer"
              src="/images/closeMobileMenuButton.svg"
              alt="menuCloseButton"
              onClick={() => props.setMobileMenuVisible(false)}
            ></img>
          </a>
        </div>
        {/*--menu-items--*/}
        <div className="z-50 mt-[120px] flex flex-col text-center font-Plus text-[26px] font-extrabold text-white-1">
          <div className="flex justify-center">
            <a href="/mint"> 
              <button className="bg-pink-1  cursor-pointer font-Grotesk font-semibold text-[16px] text-white-1 rounded-[50px]  w-[340px] h-[52px]">
                PRESALE
              </button>
            </a>
          </div>
          <div className="mt-[50px] flex flex-col space-y-7">
          <Link href="/#roadmap">
              <a onClick={() => props.setMobileMenuVisible(false)}>Collection</a>
            </Link>
            <a
              target="_blank"
              href="https://docs.yclub.io/"
              onClick={() => props.setMobileMenuVisible(false)}
            >
              Whitepaper
            </a>
            <Link href="https://docs.yclub.io/roadmap/yclubs-roadmap">
              <a onClick={() => props.setMobileMenuVisible(false)}>Roadmap</a>
            </Link>
            <Link href="/team">
              <a onClick={() => props.setMobileMenuVisible(false)}>Team</a>
            </Link>
            <Link href="">
              <a onClick={() => props.setMobileMenuVisible(false)}>
                Lifestyle
              </a>
            </Link>
          </div>

          <div className="mt-[50px] flex flex-col space-y-[32px] font-Grotesk  text-base font-normal">
            
            <a target="_blank" href="https://twitter.com/yclub_io">
              Twitter
            </a>
            <a target="_blank" href="https://t.me/yclub_official">
              Telegram
            </a>
            <a target="_blank" href="https://www.instagram.com/yclub.io/">
              Instagram
            </a>
          </div>
          <div className="hidden mt-[20px] text-[16px]  font-semibold">
            <Link href="/mint">
              <button
                className={`rounded-[50px] border border-pink-1 bg-pink-1 px-[100px] py-[16px] shadow-headerButton ${
                  props.hiddenMint && "hidden"
                }`}
              >
                Mint
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
