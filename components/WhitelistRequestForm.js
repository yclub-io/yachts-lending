const WhitelistRequestForm = () => {
    return ( 
        <div>
        <div className="relative flex">
          <img
            className="absolute top-[-110px] h-[900px] w-max min-w-[1440px] object-cover"
            src="/images/whitelistSectionWavesBg.png"
            alt="hero-bg"
          ></img>
        </div>

        <div className="relative z-50 flex">
          <div className="absolute right-[150px] top-[200px] flex h-[520px] w-[666px] flex-col rounded-3xl border border-white-1 bg-black-1 pl-[57px] text-white-1">
            <p className="pt-[70px] font-Plus text-5xl font-extrabold">
              Whitelist Request
            </p>
            <p className="py-[30px] font-Grotesk text-lg font-normal">
              Whitelist allows you to be the first inline to mint with a
              discount
            </p>

            <form>
              <label for="fwallet"></label>
              <input
                className="w-[547px] rounded-full border bg-black-1 py-[15px] pl-[22px] font-Plus text-sm font-normal text-gray-1"
                type="text"
                id="fname"
                name="fwallet"
                value="Enter Wallet Address"
              ></input>
            </form>
            <form>
              <label for="email"></label>
              <input
                className="mt-5 w-[547px] rounded-full border bg-black-1 py-[15px] pl-[22px] font-Plus text-sm font-normal text-gray-1"
                type="text"
                id="lname"
                name="email"
                value="Enter Email Address"
              ></input>
            </form>

            {/*BUTTON2 COMPONENT_START*/}
            <div className=" relative mt-5 flex text-white-1">
              <button className="text-black-2 relative w-[547px] rounded-full border  border-pink-1 bg-black-1 py-4 px-12 font-Grotesk text-base font-medium tracking-wider shadow-inner shadow-pink-1 transition-all duration-700 hover:py-4 hover:px-14 disabled:bg-opacity-5">
                APPLY FOR WHITELIST
              </button>
            </div>
            {/*BUTTON2 COMPONENT_END*/}
          </div>
        </div>
      </div>

     );
}
 
export default WhitelistRequestForm;