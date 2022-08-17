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
    <div id="roadmap" className="mt-[90px] font-Grotesk  lg:mt-52">
      <p className=" ml-4 text-left font-Plus text-4xl font-extrabold text-white-1 lg:ml-14 lg:text-8xl lg:font-semibold">
        The Roadmap
      </p>
      <div
        ref={useHorizontalScroll()}
        className="relative h-[700px] overflow-y-hidden overflow-x-scroll lg:h-[800px]"
      >
        <div>

          <div className="absolute top-[-150px] ml-10 flex flex-row">
            <div className="flex basis-[14.2%] flex-col pt-[300px] pr-[70px] text-white-1">
              <p className="pb-8 font-Grotesk text-sm font-normal text-gray-1">
                QUARTER 2 OF 2022
              </p>
              <p className="pb-4 font-Grotesk text-[32px] font-bold">Cog</p>
              <ul className="w-[300px] list-inside list-disc pl-3 text-xl font-normal text-gray-1">
                <li> Establishment of corporation in Dubai & BVI </li>
                <li> Partnership Established </li>
              </ul>
            </div>
            {/*three*/}
            <div className="flex basis-[14.2%] flex-col pt-[300px] pr-[70px] text-white-1">
              <p className="pb-8 font-Grotesk text-sm font-normal text-gray-1">
                QUARTER 3 OF 2022
              </p>
              <p className="pb-4 font-Grotesk text-[32px] font-bold">Caravel</p>
              <ul className="w-[300px] list-outside list-disc pl-3 font-Grotesk text-xl font-normal text-gray-1">
                <li> Funding from Private Investors (YCLUB)</li>
                <li> Tokenomics for $SYC </li>
                <li> Whitepaper </li>
                <li> Smart Contract Audit</li>
                <li> 7000 NFT mint</li>
                <li>
                  *dNFT mint Super Yacht Lana Launch, Genesis Collection Aug 16
                  (exclusive rights to Lana in the Metaverse)
                </li>
                <li> Networking events around the globe for YCLUB members </li>
              </ul>
            </div>
            {/*four*/}
            <div className="flex basis-[14.2%] flex-col pt-[300px] pr-[70px] text-white-1">
              <p className="pb-8 font-Grotesk text-sm font-normal text-gray-1">
                QUARTER 4 OF 2022
              </p>
              <p className="pb-4 font-Grotesk text-[32px] font-bold">Carrack</p>
              <ul className="w-[270px] list-outside list-disc pl-8 text-xl font-normal text-gray-1">
                <li> $SYC Coin Launch </li>
                <li>Token airdrop for dNFT minters (From 25% value of mint)</li>
                <li> Sandbox YCLUB</li>
                <li> DEX</li>
                <li> Monaco Event YCLUB</li>
                <li>Super Yacht Marketplace Development (first of its kind)</li>
              </ul>
            </div>
            {/*five*/}
            <div className="flex basis-[14.2%] flex-col pt-[300px] pr-[70px] lg:pr-0 text-white-1">
              <p className="pb-8 font-Grotesk text-sm font-normal text-gray-1">
                QUARTER 1 OF 2023
              </p>
              <p className="pb-4 font-Grotesk text-[32px] font-bold">Galleon</p>
              <ul className="w-[300px] list-outside list-disc pl-8 text-xl font-normal text-gray-1">
                <li> Super Yacht Crowdfunding Mint </li>
                <li> YCLUB Metaverse BETA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
