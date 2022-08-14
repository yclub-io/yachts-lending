const ConnectMetamask = ({close, connect}) => {
  return (
    <div className="z-50 h-[330px] w-[497px] rounded-[10px] border border-white-1 bg-black-1 px-[35px] py-[50px] text-center">
      <span className="text-l text-white-1">
        I acknowledge that I decide the validity and worthiness of a launchpad
        project by deciding to mint. There's a risk that, despite a creator's
        best efforts, their promises may not be fulfilled. I will do my own
        research to make the best informed decision.
      </span>
      <div className="mt-10">
        <button
          className="h-[52px] w-[197px] rounded-[26px] border border-pink-1 text-pink-1"
          onClick={connect}
        >
          I understand
        </button>
        <button
          onClick={close}
          className=" ml-4 h-[52px] w-[197px] rounded-[26px] border border-white-1 text-white-1"
        >
          Take me back
        </button>
      </div>
    </div>
  );
};

export default ConnectMetamask;
