import { useState } from "react";

const WhitelistRequestForm = ({status, message, onValidated}) => {
  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState("");

  console.log("status: ", status);
  console.log("message: ", message);

  const handleSubmit = (event) => {
    event.preventDefault();
    email &&
      wallet &&

      onValidated({
        MERGE0: email,
        MERGE7: wallet,
      });
  };

  return (
    <div id="whitelist" className="mx-4 lg:mx-0">
      {/* Desktop image version */}
      <div className="relative flex">
        <img
          className="absolute lg:top-[-110px] top-[10px] lg:h-[900px] right-[0px] lg:w-max lg:min-w-[1440px] min-w-[375px] bg-contain bg-clip-content object-cover flex"
          src="/images/whitelistSectionWavesBg.png"
          alt="hero-bg"
        ></img>
      </div>

      <div className="z-20 flex justify-center relative lg:mt-0 mt-[200px]">
        <div className="right-[150px] top-[200px] flex h-[460px] flex-col rounded-3xl border border-white-1 bg-black-1 text-white-1 lg:absolute lg:h-[500px] lg:w-[666px] lg:pl-[57px]">
          <p className="pt-[50px] text-center font-Plus text-[26px] font-extrabold lg:pt-[70px] lg:text-left lg:text-5xl">
            Whitelist Request
          </p>
          <p className="py-[30px] px-[37px] text-center font-Grotesk text-base font-normal lg:px-0 lg:text-left lg:text-lg">
            Whitelist allows you to be the first inline to mint with a discount
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center lg:justify-start">
              <label htmlFor="fwallet"></label>
              <input
                className="w-[303px] rounded-full border bg-black-1 py-[15px] pl-[22px] font-Plus text-sm font-normal text-gray-1 outline-none hover:outline-none lg:w-[547px]"
                type="text"
                id="fname"
                name="fwallet"
                placeholder="Enter Wallet Address"
                value={wallet}
                onChange={(event) => setWallet(event.target.value)}
              />
            </div>
            <div className="flex justify-center lg:justify-start">
              <label htmlFor="email"></label>
              <input
                className="mt-5 w-[303px]  rounded-full border bg-black-1 py-[15px] pl-[22px] font-Plus text-sm font-normal text-gray-1 outline-none hover:outline-none lg:w-[547px]"
                type="text"
                id="lname"
                name="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="flex lg:justify-start justify-center"> 
            <button
              type="submit"
              style={{
                background: "radial-gradient(#000000,#000000,#000000,#F5129C",
              }}
              className="w-[303px]  flex justify-center rounded-full border border-pink-1 py-4 px-12 mt-5 font-Grotesk text-base font-medium
               tracking-wider text-white-1 shadow-btnGlow transition-all duration-700 hover:py-5 hover:shadow-btnGlowHover lg:w-[547px]"
            >
              APPLY FOR WHITELIST
            </button>
            </div>
          </form>
        </div>
      </div>
        {/* THANK YOU POP-UP */}
        <div className="hidden text-white-1 mx-auto text-center border border-black-1 rounded-[20px] pt-[80px] pb-[60px]"> 
              <p className="mb-[35px] font-Plus text-[26px] font-extrabold"> 
                Thank you
              </p>
              <p className="font-Grotesk text-xl font-normal"> 
                We will be in touch via
              </p>
        </div>

    </div>
  );
};

export default WhitelistRequestForm;
