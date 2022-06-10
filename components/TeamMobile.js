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
      <div>
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
      </div>
      <div className="flex flex-col lg:hidden">
        <div className="mt-[55px] flex justify-center ">
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
