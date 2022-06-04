const RunnigLine = () => {
  const renderCommingSoon = Array(100)
    .fill(null)
    .map((element, index) => (
      <div className="flex p-2" key={index}>
        <span>ART COMING SOON</span>
        <img className="w-5 " src="/images/movingLineImg.svg" alt="element" />
      </div>
    ));

  return (
    <div className="relative mt-[125px] border-t border-b border-white-1 py-6 font-Grotesk text-xl font-medium text-white-1">
      <marquee direction="right">
        <div className="flex gap-x-5">{renderCommingSoon}</div>
      </marquee>
    </div>
  );
};

export default RunnigLine;
