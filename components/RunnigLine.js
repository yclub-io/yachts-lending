const RunnigLine = () => {
  const renderCommingSoon = Array(100)
    .fill(null)
    .map((element, index) => (
      <div className="flex p-2 space-x-5" key={index}>
        <p className="w-[200px]">ART COMING SOON</p>
        <img className="w-5 " src="/images/movingLineImg.svg" alt="element" />
      </div>
    ));

  return (
    <div className="relative mt-[170px] border-t border-b border-white-1 py-6 font-Grotesk text-xl font-medium text-white-1">
      
        <div id="running" className="flex gap-x-5">{renderCommingSoon}</div>
     
    </div>
  );
};

export default RunnigLine;
