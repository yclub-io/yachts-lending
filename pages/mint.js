import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import HeroMint from "../components/mint/HeroMint";
import InfoInMint from "../components/mint/InfoInMint";
import RoadmapInMint from "../components/mint/RoadmapInMint";
import TeamInMint from "../components/mint/TeamInMint";
import WhitelistsInMint from "../components/mint/WhitelistsInMint";

const MintIndex = () => {
  const [currentInfo, setCurrentInfo] = useState("whitelists");

  const infos = {
    whitelists: <WhitelistsInMint />,
    info: <InfoInMint />,
    roadmap: <RoadmapInMint />,
    team: <TeamInMint />,
  };

  return (
    <Layout>
      <div className="flex w-full">
        <div className="w-1/2">
          {/*HERO MINT SECTION*/}
          <HeroMint />

          {/*MINT MENU*/}
          <div
            className="mx-[60px] mt-[42px] mb-[40px] space-x-[65px]
                         font-Grotesk text-[18px] font-bold text-white-1"
          >
            {Object.keys(infos).map((info) => (
              <span
                className={`cursor-pointer pb-[10px] 
                         hover:border-b-[3px] hover:border-b-pink-1 ${
                           currentInfo === info &&
                           "border-b-[3px] border-b-pink-1"
                         }`}
                onClick={() => setCurrentInfo(info)}
              >
                {info.toUpperCase()}
              </span>
            ))}
          </div>
          <div>{infos[currentInfo]}</div>
        </div>
        <div className="mt-[30px] w-1/2">
          <img
            src="./images/gif_test.png"
            className="max-h-[660px] max-w-[660px]"
          />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default MintIndex;
