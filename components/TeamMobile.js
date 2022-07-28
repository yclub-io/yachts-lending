import { useState } from "react";

const TeamMobile = ({ teamData }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);



  const setNextTeamCard = () => {
    if(currentCardIndex < teamData.length - 1){
        setCurrentCardIndex(currentCardIndex + 1);
    }
  }

  const setPreviousTeamCard = () => {
    if(currentCardIndex > 0){
        setCurrentCardIndex(currentCardIndex-1);
    }
  }

  return (
    <div className="lg:hidden">
      {/* <div>
        <div className="m-auto flex h-[355px] w-[285px] flex-col rounded-[20px] border border-purple-1 px-1 text-center font-Grotesk">
          <p className="pt-[50px] text-[28px] font-bold">
            {teamData[currentCardIndex].name}
          </p>
          <p className="pt-[25px] text-sm text-gray-1">
            {teamData[currentCardIndex].meta}
          </p>

          <img
            className="mx-auto w-8 py-[20px]"
            src="/images/teamSectionInfDivider.svg"
            alt="divider"
          ></img>

          <p className="w mx-auto pb-[60px] text-base leading-[20px] text-gray-1 lg:w-[245px]">
            {teamData[currentCardIndex].desc}
          </p>
        </div>
      </div> */}
      {teamData[currentCardIndex].fullName ? (
        <div
          className="mx-auto flex h-[559px] w-[337px] flex-col justify-between rounded-[20px] border border-purple-1 p-5 text-center font-Grotesk"
        >
          <div>
            <div className="relative w-full">
              {teamData[currentCardIndex].socialNetworkLink && (
                <a href={teamData[currentCardIndex].socialNetworkLink} target="_blank">
                  <img
                    className="absolute top-0 right-0 w-6 hover:opacity-70"
                    src={teamData[currentCardIndex].socialNetworkImageSrc}
                    alt="social network"
                  />
                </a>
              )}
              <img
                className="m-auto h-[147px] w-[147px] rounded-full border border-purple-1"
                src={teamData[currentCardIndex].avatarSrc}
              />
            </div>

            <p className="mt-[20px] text-[24px] font-bold">{teamData[currentCardIndex].fullName}</p>
            <p className="mt-[5px] text-[18px] font-bold">{teamData[currentCardIndex].nickName}</p>
            <p className="mt-[10px] text-sm text-gray-1">{teamData[currentCardIndex].role}</p>

            <img
              className="mx-auto w-8 py-[10px]"
              src="/images/teamSectionInfDivider.svg"
              alt="divider"
            />

            <p className="w mx-auto text-base  text-gray-1 lg:w-[245px]">
              {teamData[currentCardIndex].desc}
            </p>
          </div>
          <div className="flex justify-center">
            {teamData[currentCardIndex].pastProjectsLogosArr &&
              teamData[currentCardIndex].pastProjectsLogosArr.map((logoSrc) => (
                <img
                  key={logoSrc}
                  className="mx-[10px] h-[50px] w-[50px]"
                  src={logoSrc}
                  alt={logoSrc}
                />
              ))}
          </div>
        </div>
      ) : (
        <div
          className="mx-auto flex h-[559px] w-[337px] flex-col rounded-[20px] border border-purple-1 p-5 text-center font-Grotesk"
        >
          <p className="mt-[140px] text-[28px] font-bold">{teamData[currentCardIndex].nickName}</p>
          <p className="pt-[10px] text-sm text-gray-1">{teamData[currentCardIndex].role}</p>

          <img
            className="mx-auto w-8 py-[20px]"
            src="/images/teamSectionInfDivider.svg"
            alt="divider"
          ></img>

          <p className="w mx-auto pb-[60px] text-base leading-[20px] text-gray-1 lg:w-[245px]">
            {teamData[currentCardIndex].desc}
          </p>
        </div>
      )}
      <div className="flex flex-col lg:hidden">
        <div className="mt-[20px] flex justify-center ">
          <img
            className=""
            src="/images/teamArrowScrollToLeft.svg"
            alt="arrow"
            onClick={setPreviousTeamCard}
          />
          <p className="mx-[27px] pt-2 font-Grotesk text-lg font-normal">
            {currentCardIndex+1}/{teamData.length}
          </p>

          <img
            className=""
            src="/images/teamArrowScrollToRight.svg"
            alt="arrow"
            onClick={setNextTeamCard}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMobile;
