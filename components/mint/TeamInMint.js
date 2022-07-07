import teamData from "../../data/teamData";

const TeamInMint = () => {
  const renderTeam = teamData.map((membber, index) => (
    <div key={index} className="m-auto mx-[60px] mb-[50px] font-Grotesk  text-white-1">
      <p className="pt-[20px] text-[24px] font-bold ">{membber.name}</p>
      <p className="pt-[10px] text-sm font-normal mb-[38px] text-gray-1">{membber.meta}</p>
      <p className="w mx-auto text-base font-normal leading-[20px] text-gray-1">{membber.desc}</p>
    </div>
  ));

  return <div className="overflow-y-scroll">{renderTeam}</div>;
};

export default TeamInMint;
