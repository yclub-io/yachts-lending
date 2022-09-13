import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-[285px] relative pb-10 lg:pb-0">
      <div className="flex flex-col items-center justify-between border-t border-white-1 border-opacity-50 p-8 px-4 font-Grotesk text-gray-1 lg:px-14">
        {/*LOGOTYPE*/}
        <a href="/">
          <img
            className="cursor-pointer"
            src="/images/yClubLogo.svg"
            alt="logotype"
          ></img>
        </a>

        {/*--menu-items--*/}
        <div className="absolute right-[20px] top-[50px]">
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img
              className="cursor-pointer"
              src="/images/footerArrow.svg"
              alt="logotype"
            ></img>
          </button>
        </div>

        <div className="mt-[30px] flex flex-col space-y-7 font-Grotesk text-xs  lg:flex-row lg:space-x-8 lg:space-y-0 lg:text-sm">
          <Link href="/disclaimers">
          <a className="transition-all duration-700 hover:text-white-1">
          Legal Disclaimer - Privacy Policy
          </a>
          </Link>
        </div>
        
      </div>
      <div className="mt-[61px] mb-[14px] px-[60px] text-gray-1 font-Grotesk text-[14px] ">
        © 2022 YCLUB.IO - All Right Reserved
        </div>
    </footer>
  );
};

export default Footer;
