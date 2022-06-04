const YclubCommunity = () => {
  return (
    <div className="mx-14 mt-[900px] flex flex-col text-white-1">
      <p className=" z-50 mb-[45px] font-Plus text-8xl font-semibold">
        YClub Community
      </p>
      <div className="flex flex-row border-t border-b">
        <div className="flex w-[440px] flex-col pt-[60px] text-left font-Grotesk text-lg font-normal leading-[30px]">
          <p>Follow our twitter &amp;</p>
          <p>Join our discord</p>
        </div>
        <div className="flex w-[290px]  justify-center">
          <p className="border-l border-r py-[65px] px-[88px] font-Grotesk text-4xl font-normal">
            twitter
          </p>
        </div>
        <div className="flex w-[290px]  justify-center">
          <p className=" border-r py-[65px] px-[88px] font-Grotesk text-4xl font-normal">
            discord
          </p>
        </div>
        <div className="flex w-[290px]  justify-center">
          <p className="py-[65px] px-[88px] font-Grotesk text-4xl font-normal">
            contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default YclubCommunity;
