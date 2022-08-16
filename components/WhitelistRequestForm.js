import { useState, useEffect } from "react";

const WhitelistRequestForm = ({ status, message, onValidated }) => {
  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState("");
  const [isThanksDivVisible, setThanksDivVisible] = useState(
    status === "success"
  );

  useEffect(() => {
    status === "success" && setThanksDivVisible(true);
  }, [status]);



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
          className="absolute top-[10px] right-[0px] flex min-w-[375px] bg-contain bg-clip-content object-cover lg:top-[-110px] lg:h-[900px] lg:w-max lg:min-w-[1440px]"
          src="/images/whitelistSectionWavesBg.png"
          alt="hero-bg"
        ></img>
      </div>

      <div className="relative z-20 mt-[200px] flex justify-center lg:mt-0">
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
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="mt-5  flex w-[303px] justify-center rounded-full border border-pink-1 py-4 px-12 font-Grotesk shadow-btnGlowInit text-base font-medium
               tracking-wider text-white-1 transition-all duration-700 hover:py-5 hover:shadow-btnGlowHover lg:w-[547px]"
              >
                APPLY FOR WHITELIST
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* THANK YOU POP-UP */}
      {isThanksDivVisible && (
        <div
          className="fixed top-0 left-0 z-50 flex  h-screen w-full items-center justify-center bg-black-1"
          onClick={() => {
            setThanksDivVisible(false);
            setEmail("");
            setWallet("");
          }}
        >
          <div className=" z-50 mx-auto rounded-[20px] bg-black-1  pt-[80px] pb-[60px] text-center text-white-1">
            <p className="mb-[35px] font-Plus text-[26px] font-extrabold">
              Thank you
            </p>
            <p className="font-Grotesk text-xl font-normal">
              We will be in touch via {email}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhitelistRequestForm;
