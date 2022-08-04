const CurentMintInfoAndButtons = () => {
  return (
    <div>
      <img
        src="./images/HeroSection/yachts_animation.gif"
        className="max-h-[660px] max-w-[660px]"
      />
      <div className="mt-[30px] h-[6px] w-[660px] rounded-[6px] bg-white-1 opacity-30"></div>
      <div className="mt-2 flex w-[660px]  justify-between">
        <span className="text-sm font-light text-white-1">Total Minted</span>
        <span className="text-sm font-light text-white-1">
          <bold>0% </bold>(7000/7000)
        </span>
      </div>
      <div className="flex w-[660px] flex-col">
        <button className=" mt-[30px] h-[52px] w-[660px] rounded-[26px] bg-pink-1 text-base font-semibold text-white-1">
          Connect your wallet
        </button>
        <button className=" mx-auto mt-[30px] h-[72px] w-[304px] rounded-[36px] bg-blue-3">
          <span className="text-2xl font-semibold text-white-1">
            Pay with Credit Card
          </span>
          <br />
          <span className="text-base font-light text-white-1">
            No Wallet Needed
          </span>
        </button>
      </div>
    </div>
  );
};

export default CurentMintInfoAndButtons;
