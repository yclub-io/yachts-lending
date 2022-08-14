import teamData from "../../data/teamData";

const TeamInMint = () => {
  const renderTeam = teamData.map((member, index) => (
    <div key={index} className="m-auto lg:mx-[60px] mx-[16px] mb-[50px] font-Grotesk  text-white-1">
      <p className="pt-[20px] text-[24px] font-bold ">{member.nickName}</p>
      <p className="pt-[10px] text-sm font-normal mb-[38px] text-gray-1">{member.role}</p>
      <p className="w mx-auto text-base font-normal leading-[20px] text-gray-1">{member.desc}</p>
    </div>
  ));

  return <div className="overflow-y-scroll">{renderTeam}</div>;
};

export default TeamInMint;
