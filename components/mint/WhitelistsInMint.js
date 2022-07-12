const WhitelistsInMint = () => {
    return (
         
    <div className="mx-[60px] mb-[56px] space-y-[20px]"> 
        {/*ACTIVE*/}
        <div className="flex flex-col
                        py-[20px] px-[28px]
                      border-pink-1 border rounded-[10px] text-white-1 font-Grotesk shadow-mintGlow">
            
            {/*TITLE-n-TIMER */}
            <div className="flex justify-between mb-[19px] font-semibold"> 
                <div>
                    <p className="text-[16px]">
                        Whitelist Mint
                    </p>
                </div>
                <div>
                    <p className="pl-[238px] text-pink-1 text-[13px]">
                        Ends in:
                            <span className="pl-[21px] text-white-1">
                                00 : 05 : 40 : 11
                            </span>
                    </p>
                </div>
            </div>

            {/*MINT INFO*/}
            <div className="flex space-x-[15px]">
                <div className="bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] rounded-[16.5px] font-medium text-[12px] tracking-[10%]">
                    WHITELIST 1000
                </div>
                <div className="bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] rounded-[16.5px] font-medium text-[12px] tracking-[10%]">
                    MAX 2 TOKENS
                </div>
                <div className="bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] rounded-[16.5px] font-medium text-[12px] tracking-[10%]">
                    PRICE 1.50 ETH
                </div>
            </div>
        </div>

        {/*UNACTIVE*/}
        <div className="flex flex-col
                        py-[20px] px-[28px]
                      border-white-1 border rounded-[10px] text-white-1 font-Grotesk">
            
            {/*TITLE-n-TIMER */}
            <div className="flex justify-between mb-[19px] font-semibold"> 
                <div>
                    <p className="text-[16px]">
                        Whitelist Mint
                    </p>
                </div>
                <div>
                    <p className="pl-[238px] text-pink-1 text-[13px]">
                        Starts in:
                            <span className="pl-[21px] text-white-1">
                                00 : 05 : 40 : 11
                            </span>
                    </p>
                </div>
            </div>

            {/*MINT INFO*/}
            <div className="flex space-x-[15px]">
                <div className="bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] rounded-[16.5px] font-medium text-[12px] tracking-[10%]">
                    WHITELIST 1000
                </div>
                <div className="bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] rounded-[16.5px] font-medium text-[12px] tracking-[10%]">
                    MAX 2 TOKENS
                </div>
                <div className="bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] rounded-[16.5px] font-medium text-[12px] tracking-[10%]">
                    PRICE 1.50 ETH
                </div>
            </div>
        </div>

        {/*ENDED*/}
        <div className="flex flex-col
                        py-[20px] px-[28px]
                      border-white-1 border rounded-[10px] text-white-1 font-Grotesk">
            
            {/*TITLE-n-TIMER */}
            <div className="flex justify-between mb-[19px] font-semibold"> 
                <div>
                    <p className="text-[16px]">
                        Whitelist Mint
                    </p>
                </div>
                <div>
                    <p className="pl-[238px] text-pink-1 text-[13px]">
                        ENDED
                    </p>
                </div>
            </div>

            {/*MINT INFO*/}
            <div className="flex space-x-[15px]">
                <div className="bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] rounded-[16.5px] font-medium text-[12px] tracking-[10%]">
                    WHITELIST 1000
                </div>
                <div className="bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] rounded-[16.5px] font-medium text-[12px] tracking-[10%]">
                    MAX 2 TOKENS
                </div>
                <div className="bg-white-1 bg-opacity-[20%] px-[10px] py-[5px] rounded-[16.5px] font-medium text-[12px] tracking-[10%]">
                    PRICE 1.50 ETH
                </div>
            </div>
        </div>



    </div>
 );
}
 
export default WhitelistsInMint;