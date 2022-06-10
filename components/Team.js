const teamData = [
  {
    name: "Neptune",
    meta: "Founder",
    desc: "Basically born on a Super Yacht, years of experience in helping to curate and market extravagant experiences for those chartering and owning these vessels of extravagance.",
  },
  {
    name: "Mega Skipper",
    meta: "Campaigns",
    desc: "Ex VP of digital in largest Israeli advertising agency with 25 years of experience in online advertising.",
  },
  {
    name: "Blade",
    meta: "Strategies",
    desc: "Engineered for several Fortune 500 companies in a variety of technology related roles while building his website into the top 1000 most visited websites in the world.",
  },
  {
    name: "Cobra",
    meta: "Marketing",
    desc: "10 years of experience helping E-commerce brands launch and scale while generating over a billion dollars in sales for some of the world's retail giants.",
  },
  {
    name: "Poseidon",
    meta: "Operations",
    desc: "Chief Operations Officer in many successful start ups. I always say there is no bad business there is a bad operation.",
  },
  {
    name: "Lipek",
    meta: "Community manager",
    desc: "10 years of experience in growing communities on social media. Since 2012 grew over 15m followers and reached over 300m users.",
  },
  {
    name: "Carrara",
    meta: "UI/UX",
    desc: "Years of experience specializing in designing web & mobile apps, websites and admin portals. Believes that design is not about beautiful pixels but about solving problems & achieving business and user goals.",
  },
  { name: "Polo Marco", meta: "Brand Strategists & Communications", desc: "Photographer and Strategist, with over 5 years of helping brands strengthen their communications, communities, and lifestyle experiences." },
];

const Team = () => {
  const renderTeam = teamData.map((membber) => (
    <div className="flex h-[355px] w-[285px] flex-col rounded-[20px] border border-purple-1 px-1 text-center font-Grotesk">
      <p className="pt-[50px] text-[28px] font-bold">{membber.name}</p>
      <p className="pt-[25px] text-sm text-gray-1">{membber.meta}</p>

      <img
        className="mx-auto w-8 py-[20px]"
        src="/images/teamSectionInfDivider.svg"
        alt="divider"
      ></img>

      <p className="mx-auto w-[245px] pb-[60px] text-base leading-[20px] text-gray-1">
        {membber.desc}
      </p>
    </div>
  ));

  return (
    <div id="team" className="mx-4 text-white-1 lg:mx-14">
      <p className="mb-[68px] flex justify-center text-center font-Plus text-[26px] font-extrabold lg:mb-[125px] lg:text-5xl">
        Team
      </p>

      <div className="grid grid-flow-col-dense gap-[20px] overflow-y-hidden overflow-x-scroll lg:gap-[50px]">
        {renderTeam}
      </div>

      {/*Mobile version arrows control
        <div className="lg:hidden flex justify-center mt-[55px]">
                      <img
                        className=""
                        src="/images/teamArrowScrollToLeft.svg"
                        alt="arrow"
                      />
          <p className="font-Grotesk font-normal text-lg mx-[27px] pt-2"> 1/8 </p>
                      <img
                        className=""
                        src="/images/teamArrowScrollToRight.svg"
                        alt="arrow"
                      />
        </div>
        */}
    </div>
  );
};

export default Team;
