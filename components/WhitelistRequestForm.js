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
              <label htmlFor="fwallet"></label>
              <input
                className="w-[547px] rounded-full border bg-black-1 py-[15px] pl-[22px] font-Plus text-sm font-normal text-gray-1 hover:outline-none outline-none"
                type="text"
                id="fname"
                name="fwallet"
                placeholder="Enter Wallet Address"
              ></input>
            </form>
            <form>
              <label htmlFor="email"></label>
              <input
                className="mt-5 w-[547px] rounded-full border bg-black-1 py-[15px] pl-[22px] font-Plus text-sm font-normal text-gray-1 hover:outline-none outline-none"
                type="text"
                id="lname"
                name="email"
                placeholder="Enter Email Address"
              ></input>
            </form>

            <div className="relative mt-5 flex"> 
              <button style={{background: "radial-gradient(#000000,#000000,#000000,#F5129C"}}
              className="w-[547px] absolute text-white-1 border border-pink-1 py-4 px-12 rounded-full font-Grotesk text-base shadow-btnGlow hover:shadow-btnGlowHover font-medium tracking-wider transition-all duration-700 hover:py-5"> 
                APPLY FOR WHITELIST
              </button>
            </div>
           
          </div>
        </div>
      </div>

     );
}
 
export default WhitelistRequestForm;