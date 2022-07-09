import TeamDesktop from "./TeamDesktop";
import TeamMobile from "./TeamMobile";
import teamData from "../data/teamData";

const Team = () => {
  return (
    <div id="team" className=" text-white-1 lg:mx-14">
      <p className="mb-[68px] mt-[347px] flex justify-center text-center font-Plus font-extrabold lg:mb-[125px] lg:text-5xl text-[26px]">
        Team
      </p>
      <TeamDesktop teamData={teamData} />
      <TeamMobile teamData={teamData} />
    </div>
  );
};

export default Team;
