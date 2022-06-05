const WhitelistRequestForm = () => {
    return ( 
        <div className="lg:mx-0 mx-4">
        {/* Desktop version */}
        <div className="relative flex">
          <img
            className="lg:flex hidden absolute top-[-110px] h-[900px] w-max min-w-[1440px] object-cover bg-clip-content bg-contain"
            src="/images/whitelistSectionWavesBg.png"
            alt="hero-bg"
          ></img>
        </div>

        <div className="lg:relative z-50 flex justify-center">
          <div className="lg:absolute right-[150px] top-[200px] flex lg:h-[520px] h-[460px] lg:w-[666px] flex-col rounded-3xl border border-white-1 bg-black-1 lg:pl-[57px] text-white-1">
            <p className="lg:pt-[70px] pt-[50px] font-Plus lg:text-5xl text-[26px] font-extrabold lg:text-left text-center">
              Whitelist Request
            </p>
            <p className="py-[30px] lg:px-0 px-[37px] font-Grotesk lg:text-lg text-base font-normal lg:text-left text-center">
              Whitelist allows you to be the first inline to mint with a
              discount
            </p>

            <form className="flex lg:justify-start justify-center">
              <label htmlFor="fwallet"></label>
              <input
                className="lg:w-[547px] w-[303px] rounded-full border bg-black-1 py-[15px] pl-[22px] font-Plus text-sm font-normal text-gray-1 hover:outline-none outline-none"
                type="text"
                id="fname"
                name="fwallet"
                placeholder="Enter Wallet Address"
              ></input>
            </form>
            <form className="flex lg:justify-start justify-center">
              <label htmlFor="email"></label>
              <input
                className="mt-5 lg:w-[547px]  w-[303px] rounded-full border bg-black-1 py-[15px] pl-[22px] font-Plus text-sm font-normal text-gray-1 hover:outline-none outline-none"
                type="text"
                id="lname"
                name="email"
                placeholder="Enter Email Address"
              ></input>
            </form>

            <div className="relative mt-5 flex lg:justify-start justify-center"> 
              <button style={{background: "radial-gradient(#000000,#000000,#000000,#F5129C"}}
              className="lg:w-[547px] w-[303px] absolute text-white-1 border border-pink-1 py-4 px-12 rounded-full font-Grotesk
               text-base shadow-btnGlow hover:shadow-btnGlowHover font-medium tracking-wider transition-all duration-700 hover:py-5"> 
                APPLY FOR WHITELIST
              </button>
            </div>
           
          </div>
        </div>

            {/* Mobile version */}

            
      </div>

     );
}
 
export default WhitelistRequestForm;