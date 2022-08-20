import { useEffect, useState } from "react";
import Header from "../components/Header";
import CurentMintMainInfo from "../components/mint/CurentMintMainInfo";
import HeroMint from "../components/mint/HeroMint";
import InfoInMint from "../components/mint/InfoInMint";
import RoadmapInMint from "../components/mint/RoadmapInMint";
import TeamInMint from "../components/mint/TeamInMint";
import MintsList from "../components/mint/MintsList";
import contractsData from "../data/contractsData";
import Layout from "../components/Layout";
import Head from "next/head";

const MintIndex = () => {
  const [currentInfo, setCurrentInfo] = useState("whitelists");
  const [currentDate, setCurrentDate] = useState();
  const [currentMintContractIndex, setCurrentMintContractIndex] = useState(-1);

  const infos = {
    whitelists: currentDate && (
      <MintsList
        currentDate={currentDate}
        currentMintContractIndex={currentMintContractIndex}
        setCurrentMintContractIndex={setCurrentMintContractIndex}
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

      if(currentMintContractIndex >= 0){
        return;
      }

      if (currentDate > contractsData[contractsData.length - 1].end) {
        setCurrentMintContractIndex(-2);
        return;
      }

      setCurrentMintContractIndex(-1);

      for(let i = 0; i < contractsData.length; i++) {
        if (contractsData[i].start <= currentDate && contractsData[i].end > currentDate) {
          setCurrentMintContractIndex(i);
          return;
        }
      }

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
    <Layout>
      <Head>
        <title>YCLUB - MINT</title>
      </Head>
      <div className="relative flex flex-col-reverse lg:flex-row lg:pt-10">
        <div className="lg:w-1/2 ">
          <HeroMint />
          <div
            className="mx-[16px] mt-[42px] mb-[40px] flex justify-center space-x-[37px] font-Grotesk text-[14px]
                         font-bold text-white-1 lg:mx-[60px]  lg:space-x-[65px] lg:text-[18px]"
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
        <div className="mt-[120px] min-h-screen w-full lg:w-1/2">
          <CurentMintMainInfo
            currentMintContractIndex={currentMintContractIndex}
            currentDate={currentDate}
          />
        </div>
      </div>
    </Layout>
  );
};

export default MintIndex;
