import { useEffect, useRef } from "react";

const Roadmap = () => {
  const useHorizontalScroll = () => {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onScroll = (e) => {
          if (e.deltaY == 0) return;
          if (
            (el.scrollLeft + el.clientWidth < el.scrollWidth && e.deltaY > 0) ||
            (el.scrollLeft > 0 && e.deltaY < 0)
          ) {
            e.preventDefault();
            el.scrollTo({
              left: el.scrollLeft + e.deltaY,
            });
          }
        };
        el.addEventListener("wheel", onScroll);
        return () => el.removeEventListener("wheel", onScroll);
      }
    }, []);
    return elRef;
  };

  return (
    <div id="roadmap" className="mt-[90px] lg:mt-52">
      <p className=" ml-4 text-left font-Plus text-4xl font-extrabold text-white-1 lg:ml-14 lg:text-8xl lg:font-semibold">
        The Roadmap
      </p>
      <div
        ref={useHorizontalScroll()}
        className="relative mt-10 h-[700px] overflow-y-hidden overflow-x-scroll lg:h-[800px]"
      >
        <div>
          <img
            className="absolute z-50 mt-10 min-w-[2594px]"
            src="/images/roadMapLineTest.svg"
            alt="roadmap-line"
          ></img>
          <img
            className="absolute mt-12 min-w-[2594px]"
            src="/images/roadMapLineTestSecEl.svg"
            alt="roadmap-line"
          ></img>
          <div className="absolute top-[-150px] mx-28 flex flex-row">
            {/*one*/}
            <div className="flex basis-[14.2%] flex-col pt-[300px] pr-[70px] text-white-1">
              <p className="pb-8 font-Grotesk text-sm font-normal text-gray-1">
                QUARTER 1 OF 2022
              </p>
              <p className="pb-4 font-Grotesk text-[32px] font-bold">Drakar</p>
              <ul className="w-[300px] list-inside list-disc pl-3 text-xl font-normal text-gray-1">
                <li> Research &amp; Development </li>
                <li> Concept development</li>
              </ul>
            </div>

            {/*two*/}
            <div className="flex basis-[14.2%] flex-col pt-[300px] pr-[70px] text-white-1">
              <p className="pb-8 font-Grotesk text-sm font-normal text-gray-1">
                QUARTER 2 OF 2022
              </p>
              <p className="pb-4 font-Grotesk text-[32px] font-bold">Cog</p>
              <ul className="w-[300px] list-inside list-disc pl-3 text-xl font-normal text-gray-1">
                <li> Roadmap </li>
                <li> Funding </li>
                <li> Tokenomics </li>
                <li> Whitepaper </li>
                <li> Website </li>
                <li> NFT Art </li>
                <li> Video </li>
                <li> Smart Contract </li>
                <li> Audit </li>
              </ul>
            </div>
            {/*three*/}
            <div className="flex basis-[14.2%] flex-col pt-[300px] pr-[70px] text-white-1">
              <p className="pb-8 font-Grotesk text-sm font-normal text-gray-1">
                QUARTER 3 OF 2022
              </p>
              <p className="pb-4 font-Grotesk text-[32px] font-bold">Caravel</p>
              <ul className="w-[300px] list-inside list-disc pl-3 text-xl font-normal text-gray-1">
                <li> Lana Collection Mint</li>
                <li> Token Launch </li>
                <li> Decentraland YCLUB </li>
                <li> NFT Airdrop </li>
                <li> Token Airdrop </li>
                <li> Sandbox YCLUB </li>
                <li> Yacht charter/sales Marketplace Development </li>
              </ul>
            </div>
            {/*four*/}
            <div className="flex basis-[14.2%] flex-col pt-[300px] pr-[70px] text-white-1">
              <p className="pb-8 font-Grotesk text-sm font-normal text-gray-1">
                QUARTER 4 OF 2022
              </p>
              <p className="pb-4 font-Grotesk text-[32px] font-bold">Carrack</p>
              <ul className="w-[300px] list-inside list-disc pl-3 text-xl font-normal text-gray-1">
                <li> $100 Million Mega Yacht Crowdfunding Mint </li>
                <li> Live From Monaco Yacht Show </li>
                <li> Monaco YCLUB Megaparty </li>
                <li> DEX </li>
                <li> Liquidity Pools </li>
                <li> NFT Marketplace </li>
                <li> Yacht charter/sales Marketplace launch </li>
                <li> PFP Collection Airdrop </li>
                <li> Web3.0 eCommerce marketplace launch </li>
              </ul>
            </div>
            {/*five*/}
            <div className="flex basis-[14.2%] flex-col pt-[300px] pr-[70px] text-white-1">
              <p className="pb-8 font-Grotesk text-sm font-normal text-gray-1">
                QUARTER 1 OF 2023
              </p>
              <p className="pb-4 font-Grotesk text-[32px] font-bold">Galleon</p>
              <ul className="w-[300px] list-inside list-disc pl-3 text-xl font-normal text-gray-1">
                <li> YCLUB Wallet </li>
                <li> Debit Visa to cash rewards </li>
                <li> Mega Yacht Collection Mint </li>
                <li> PFP Collection Airdrop </li>
              </ul>
            </div>
            {/*six*/}
            <div className="flex basis-[14.2%] flex-col pt-[300px] pr-[70px] text-white-1">
              <p className="pb-8 font-Grotesk text-sm font-normal text-gray-1">
                QUARTER 2 OF 2023
              </p>
              <p className="pb-4 font-Grotesk text-[32px] font-bold">Frigate</p>
              <ul className="w-[300px] list-inside list-disc pl-3 text-xl font-normal text-gray-1">
                <li> 2nd Mega Yacht Crowdfunding mint </li>
                <li> YCLUB Metaverse Beta launch </li>
                <li> PFP Collection Airdrop </li>
              </ul>
            </div>
            {/*seven*/}
            <div className="flex basis-[14.2%] flex-col pt-[300px] pr-[70px] text-white-1">
              <p className="pb-8 font-Grotesk text-sm font-normal text-gray-1">
                QUARTER 3-4 OF 2023
              </p>
              <p className="pb-4 font-Grotesk text-[32px] font-bold">Clipper</p>
              <ul className="w-[300px] list-inside list-disc pl-3 text-xl font-normal text-gray-1">
                <li>
                  {" "}
                  Mega Party For Launching IRL the first Crowdfunded Yacht
                  (Provide Construction Update and Delivery Date){" "}
                </li>
                <li> Creation of the Mega Yacht Owner’s Club </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
