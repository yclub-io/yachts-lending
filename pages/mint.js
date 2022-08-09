import { useEffect, useState } from "react";
import Header from "../components/Header";
import CurentMintInfoAndButtons from "../components/mint/CurentMintInfoAndButtons";
import HeroMint from "../components/mint/HeroMint";
import InfoInMint from "../components/mint/InfoInMint";
import RoadmapInMint from "../components/mint/RoadmapInMint";
import TeamInMint from "../components/mint/TeamInMint";
import MintsList from "../components/mint/MintsList";
import contractsData from "../data/contractsData";

const MintIndex = () => {
  const [currentInfo, setCurrentInfo] = useState("whitelists");
  const [currentDate, setCurrentDate] = useState();
  const [currentMintContractIndex, setCurrentMintContractIndex] = useState(-1);

  const infos = {
    whitelists: currentDate && (
      <MintsList
        currentDate={currentDate}
        currentMintContractIndex={currentMintContractIndex}
      />
    ),
    info: <InfoInMint />,
    roadmap: <RoadmapInMint />,
    team: <TeamInMint />,
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentDate = Math.floor(new Date() / 1000);
      setCurrentDate(currentDate);

      if (currentDate > contractsData[contractsData.length - 1].end) {
        setCurrentMintContractIndex(-2);
        return;
      }

      setCurrentMintContractIndex(-1);

      contractsData.forEach((contract, index) => {
        if (contract.start <= currentDate && contract.end > currentDate) {
          setCurrentMintContractIndex(index);
          return;
        }
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [currentDate]);

  return (
    <div className="relative m-auto max-w-[1440px]">
      <Header />
      <div className="relative flex w-full flex-col-reverse lg:flex-row lg:pt-10">
        <div className="w-1/2">
          <HeroMint />
          <div
            className="mx-[60px] mt-[42px] mb-[40px] space-x-[65px]
                         font-Grotesk text-[18px] font-bold text-white-1"
          >
            {Object.keys(infos).map((info) => (
              <span
                key={info}
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
        <div className="mt-[30px] w-1/2 lg:fixed lg:right-0 lg:top-[120px]">
          <CurentMintInfoAndButtons
            currentMintContractIndex={currentMintContractIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default MintIndex;
