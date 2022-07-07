import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
    <div className="m-auto max-w-[1440px] ">
      <Header />
      <div className="flex w-full">
        <div className="w-1/2">
          <div >
            <span
              className="text-white-1"
              onClick={() => setCurrentInfo("whitelists")}
            >
              whitelists{" "}
            </span>
            <span
              className="text-white-1"
              onClick={() => setCurrentInfo("info")}
            >
              info{" "}
            </span>
            <span
              className="text-white-1"
              onClick={() => setCurrentInfo("roadmap")}
            >
              roadmap{" "}
            </span>
            <span
              className="text-white-1"
              onClick={() => setCurrentInfo("team")}
            >
              team{" "}
            </span>
          </div>
          <div >{infos[currentInfo]}</div>
        </div>
        <div className="w-1/2">
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
