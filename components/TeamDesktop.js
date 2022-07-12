const TeamDesktop = ({ teamData }) => {
  const renderTeam = teamData.map((membber, index) => (
    <div
      key={index}
      className="mx-[23px] mb-[50px] flex h-[355px] w-[285px] flex-col rounded-[20px] border border-purple-1 px-1 text-center font-Grotesk"
    >
      <p className="pt-[20px] text-[28px] font-bold">{membber.name}</p>
      <p className="pt-[10px] text-sm text-gray-1">{membber.meta}</p>

      <img
        className="mx-auto w-8 py-[20px]"
        src="/images/teamSectionInfDivider.svg"
        alt="divider"
      ></img>

      <p className="w mx-auto pb-[60px] text-base leading-[20px] text-gray-1 lg:w-[245px]">
        {membber.desc}
      </p>
    </div>
  ));

  return <div className="hidden flex-wrap lg:flex">{renderTeam}</div>;
};

export default TeamDesktop;
