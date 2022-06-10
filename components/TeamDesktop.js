import { useState, useEffect, useRef } from "react";

const TeamDesktop = ({ teamData }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isEndOfrightScroll, setEndOfrightScroll] = useState(false);

  const elRef = useRef();
  let el;

  const useHorizontalScroll = () => {
    useEffect(() => {
      el = elRef.current;
      el.scrollTo({ left: scrollPosition });
      setEndOfrightScroll(el.scrollLeft + el.clientWidth === el.scrollWidth);
      if (el) {
        const onScroll = (e) => {
          setScrollPosition(el.scrollLeft);
        };
        el.addEventListener("wheel", onScroll);
        return () => el.removeEventListener("wheel", onScroll);
      }
    }, [scrollPosition]);
    return elRef;
  };

  const setNextTeamCard = () => {
    console.log("click");
    const cardWidth = parseInt(el.scrollWidth / teamData.length);
    const currnetCard = parseInt(scrollPosition / cardWidth);
    console.log("currnetCard", currnetCard);
    setScrollPosition((currnetCard + 1) * cardWidth);
  };

  const renderTeam = teamData.map((membber, index) => (
    <div
      key={index}
      className="m-auto flex h-[355px] w-[285px] flex-col rounded-[20px] border border-purple-1 px-1 text-center font-Grotesk"
    >
      <p className="pt-[50px] text-[28px] font-bold">{membber.name}</p>
      <p className="pt-[25px] text-sm text-gray-1">{membber.meta}</p>

      <img
        className="mx-auto w-8 py-[20px]"
        src="/images/teamSectionInfDivider.svg"
        alt="divider"
      ></img>

      <p className="w mx-auto pb-[60px] text-base leading-[20px] text-gray-1 lg:w-[245px]">
        {membber.desc}
      </p>
    </div>
  ));

  return (
    <div className="relative">
      <div
        ref={useHorizontalScroll()}
        className="hidden grid-flow-col-dense gap-[20px] overflow-y-hidden overflow-x-scroll lg:grid lg:gap-[50px]"
      >
        {!isEndOfrightScroll && (
          <div className="absolute top-0 right-0 hidden h-full w-40 lg:flex ">
            <img
              className="m-auto cursor-pointer "
              src="/images/teamArrowScrollToRight.svg"
              alt="arrow"
              onClick={setNextTeamCard}
            />
          </div>
        )}
        {renderTeam}
      </div>
    </div>
  );
};

export default TeamDesktop;
