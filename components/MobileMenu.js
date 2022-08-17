import Link from "next/link";

const MobileMenu = (props) => {
  return (
    <div className="fixed top-[-1px] z-50 h-[1000px] w-full bg-black-1">
      <div className=" text-white-1">
        <div className="flex justify-start">
          {/*--menu-close-button--*/}
          <a className="absolute right-[15px] mr-auto">
            <img
              className="mt-[24px] w-[25px] cursor-pointer"
              src="/images/closeMobileMenuButton.svg"
              alt="menuCloseButton"
              onClick={() => props.setMobileMenuVisible(false)}
            ></img>
          </a>
        </div>
        {/*--menu-items--*/}
        <div className="z-50 mt-[75px] flex flex-col text-center font-Plus text-[26px] font-extrabold text-white-1">
          <div className="flex flex-col space-y-7">
            <a
              target="_blank"
              href="https://docs.yclub.io/"
              onClick={() => props.setMobileMenuVisible(false)}
            >
              Docs
            </a>
            <Link href="/#roadmap">
              <a onClick={() => props.setMobileMenuVisible(false)}>RoadMap</a>
            </Link>
            <Link href="/team">
              <a onClick={() => props.setMobileMenuVisible(false)}>Team</a>
            </Link>
            <Link href="/#vision">
              <a onClick={() => props.setMobileMenuVisible(false)}>
                The Vision
              </a>
            </Link>
            <Link href="/#faq">
              <a onClick={() => props.setMobileMenuVisible(false)}>FAQ</a>
            </Link>
          </div>

          <div className="mt-[25px] flex flex-col space-y-[35px] font-Grotesk  text-base font-normal">
            <a target="_blank" href="https://discord.gg/yclub">
              Discord
            </a>
            <a target="_blank" href="https://twitter.com/yclub_io">
              Twitter
            </a>
            <a target="_blank" href="https://www.instagram.com/yclub.io/">
              Instagram
            </a>
          </div>
          <div className="mt-[20px] text-[16px]  font-semibold">
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
