import TeamDesktop from "./TeamDesktop";
import TeamMobile from "./TeamMobile";

const teamData = [
  {
    name: "Neptune",
    meta: "Founder",
    desc: "Basically born on a Super Yacht, years of experience in helping to curate and market extravagant experiences for those chartering and owning these vessels of extravagance.",
  },
  {
    name: "Poseidon",
    meta: "Operations",
    desc: "Chief Operations Officer in many successful start ups. I always say there is no bad business there is a bad operation.",
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
    name: "De VIchi",
    meta: "Financial Analyst",
    desc: "has over 10 years of consulting and building working relationships between customers and their brand partners. Through years of experience in banking, and financial services, David’s managed to institute financial systems to strengthen portfolio health.",
  },
  {
    name: "Cobra",
    meta: "Marketing",
    desc: "20 years of experience helping E-commerce brands launch and scale while generating over a billion dollars in sales for some of the world's retail giants.",
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
  {
    name: "Polo Marco",
    meta: "Brand Strategists & Communications",
    desc: "Photographer and Strategist, with over 5 years of helping brands strengthen their communications, communities, and lifestyle experiences.",
  },
];

const Team = () => {
  return (
    <div id="team" className=" text-white-1 lg:mx-14">
      <p className="mb-[68px] flex justify-center text-center font-Plus text-[26px] font-extrabold lg:mb-[125px] lg:text-5xl">
        Team
      </p>
      <TeamDesktop teamData={teamData} />
      <TeamMobile teamData={teamData} />
    </div>
  );
};

export default Team;
