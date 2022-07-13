import TeamDesktop from "./TeamDesktop";
import TeamMobile from "./TeamMobile";
import teamData from "../data/teamData";

const Team = () => {
  return (
    <div id="team" className=" text-white-1 lg:mx-14">
      <p className="mb-[68px] lg:mt-[347px] md:mt-[5em] mt-[1em] flex justify-center text-center font-Plus font-extrabold lg:mb-[125px] lg:text-5xl text-[26px]">
        Team
      </p>
      <TeamDesktop teamData={teamData} />
      <TeamMobile teamData={teamData} />

      <p className="m-auto text-center lg:mt-[140px] mt-[70px] font-semibold lg:w-[950px] w-[331px] lg:leading-[48px] leading-[36px] lg:text-[36px] text-[24px] lg:p-0 p-[22px]">
      WE ARE MORE... WE JUST HAVE NO MORE SPACE... 😌 BUT WE ARE STILL HIRING...
      </p>
    </div>
  );
};

export default Team;
