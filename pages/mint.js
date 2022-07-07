import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroMint from "../components/mint/HeroMint";
import InfoInMint from "../components/mint/InfoInMint";
import RoadmapInMint from "../components/mint/RoadmapInMint";
import TeamInMint from "../components/mint/TeamInMint";
import WhitelistsInMint from "../components/mint/WhitelistsInMint";

const MintIndex = () => {
  const [currentInfo, setCurrentInfo] = useState("team");

  const infos = {
    whitelists: <WhitelistsInMint />,
    info: <InfoInMint />,
    roadmap: <RoadmapInMint />,
    team: <TeamInMint />,
  };

  return (
    <div className="m-auto max-w-[1440px]">
      <Header />
      <div className="flex w-full">
        <div className="w-1/2">
          {/*HERO MINT SECTION*/}
          <HeroMint />

          {/*MINT MENU*/}
          <div className="mt-[42px] mb-[40px] mx-[60px] space-x-[65px]
                         font-bold text-[18px] text-white-1 font-Grotesk">
            <span
              className="pb-[10px]
                         hover:border-b-[3px] hover:border-b-pink-1"
              onClick={() => setCurrentInfo("whitelists")}
            >
              WHITELISTS
            </span>
            <span
              className="pb-[10px]
                         hover:border-b-[3px] hover:border-b-pink-1"
              onClick={() => setCurrentInfo("info")}
            >
              INFO
            </span>
            <span
              className="pb-[10px]
                         hover:border-b-[3px] hover:border-b-pink-1"
              onClick={() => setCurrentInfo("roadmap")}
            >
              ROADMAP
            </span>
            <span
              className="pb-[10px]
                         hover:border-b-[3px] hover:border-b-pink-1"
              onClick={() => setCurrentInfo("team")}
            >
              TEAM
            </span>
          </div>
          <div >{infos[currentInfo]}</div>
        </div>
        <div className="w-1/2 mt-[30px]">
          <img
            src="./images/gif_test.png"
            className="max-h-[660px] max-w-[660px]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MintIndex;
