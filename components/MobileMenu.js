const MobileMenu = (props) => {
    return ( 
        <div className="sm:hidden fixed top-[-1px] w-full h-[812px] bg-black-1 z-50">
        <div className=" text-white-1"> 
        <div className="flex justify-start"> 
       

          {/*--menu-close-button--*/}
        <a className="mr-auto absolute right-[15px]">
          <img
            className="w-[25px] mt-[24px] cursor-pointer"
            src="/images/closeMobileMenuButton.svg"
            alt="menuCloseButton"
            onClick={() => props.setMobileMenuVisible(false)}
          ></img>
        </a>
        </div>
        {/*--menu-items--*/}
        <div className="flex flex-col text-[26px] mt-[75px] text-white-1 text-center font-Plus font-extrabold">
        <div className="flex flex-col space-y-7">
          <a
            href="#roadmap"
            onClick={() => props.setMobileMenuVisible(false)}
          >
            RoadMap
          </a>
          <a
            className="hover:text-white-1 transition-all duration-700"
            href="#team"
            onClick={() => props.setMobileMenuVisible(false)}
          >
            Team
          </a>
          <a
            href="#vision"
            onClick={() => props.setMobileMenuVisible(false)}
          >
            The Vision
          </a>
          <a
            href="#faq"
            onClick={() => props.setMobileMenuVisible(false)}
          >
            FAQ
          </a>
        </div>

          <div className="flex flex-col font-Grotesk text-base font-normal  space-y-[35px] mt-[55px]"> 
          <a
            target="_blank"
            href="https://discord.gg/MYfrX4Cu"
          >
            Discord
          </a>
          <a
            target="_blank"
            href="https://twitter.com/yclub_io"
          >
            Twitter
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/yclub.io/"
          >
            Instagram
          </a>


          </div>
        </div>
        </div>
    </div>

     );
}
 
export default MobileMenu;