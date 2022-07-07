import teamData from "../../data/teamData";

const TeamInMint = () => {
  const renderTeam = teamData.map((membber, index) => (
    <div key={index} className="m-auto mb-[50px]  text-white-1">
      <p className="pt-[20px] text-[28px] font-bold ">{membber.name}</p>
      <p className="pt-[10px] text-sm ">{membber.meta}</p>
      <p className="w mx-auto text-base leading-[20px]  ">{membber.desc}</p>
    </div>
  ));

  return <div className="overflow-y-scroll">{renderTeam}</div>;
};

export default TeamInMint;
