import Button from "../TW_components /Button";




const Index = () => {
    return ( 
<div className="max-w-[1440px]"> 
{/*NABAR*/}
<nav className="relative z-50">
        <div className="flex items-center justify-between p-8 px-14 border-white-1 border-opacity-50 border-b font-Grotesk antialiased text-white-1"> 
          <a href="/">
            <img
              className="cursor-pointer"
              src="/images/yClubLogo.svg"
              alt="logotype"
            ></img>
          </a>
          {/*--menu-items--*/}
          <div className="flex  pl-36 space-x-8 font-Grotesk text-sm">
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#howItworks"
            >
              RoadMap
            </a>
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#faq"
            >
              Team
            </a>
            <a
              target="_blank"
              href="https://docs.algem.io/"
              className="hover:text-white-1 transition-all duration-700"
            >
              Whitepaper
            </a>
            <a
              target="_blank"
              href="https://medium.com/@algem"
              className="pr-7 hover:text-white-1 transition-all duration-700"
            >
              Tokonomics
            </a>
          </div>

          <div className="flex space-x-8 font-Grotesk text-sm">
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#howItworks"
            >
              Discord
            </a>
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#faq"
            >
              Twitter
            </a>
            <a
              target="_blank"
              href="https://docs.algem.io/"
              className="hover:text-white-1 transition-all duration-700"
            >
              Instagram
            </a>
          </div>
          
          
        </div>
      </nav>
{/*NABAR END*/}

{/*HERO SECTION START*/}
<div className="relative"> 
<img          
    className="absolute top-[-110px] w-max object-cover h-[900px] max-w-[1440px]"
    src="/images/heroSectionWaves.png"
    alt="hero-bg"
></img>
</div>


<div className="flex flex-row text-white-1 font-Grotesk px-14 pt-9">
<div className="flex flex-col basis-1/2 z-50"> 
    <p className="text-[180px] font-bold"> 
       YCLUB 
    </p>
    <span className="text-base">
      NFT PROJECT
    </span>

</div>
<div className="flex flex-col basis-1/2 z-50 pl-20"> 
      <p className="text-[180px] font-bold leading-[180px] flex flex-col pt-[50px]"> 
        JULY
           
       <span className=" text-black-1 text-opacity-0 bg-clip-text bg-gradient-to-t from-blue-1 to-purple-1"> 
        2022
      </span>
        
        
      </p>     
      <p className="text-lg w-[400px] pt-8"> 
        Your charter into a world of extravagance
        both in the Metaverse and beyond.  
      </p>

</div>
</div>



{/*BUTTON COMPONENT_START*/}
<div className=" text-white-1 mt-20 mx-10 relative flex justify-center"> 
<div className="absolute mx-[555px] inset-0 w-62 rounded-lg bg-pink-1 blur-sm"></div>
<button className= "relative py-3 px-12 text-black-2  bg-black-1 border-pink-1 shadow-inner shadow-pink-1 border rounded-full hover:py-4 hover:px-14 transition-all duration-700 disabled:bg-opacity-5 font-Grotesk text-base font-medium tracking-wider">
   APPLY FOR WHITELIST 
</button> 
</div>
{/*BUTTON COMPONENT_END*/}

{/*HERO SECTION END*/}



{/*RUNNING_LINE_START*/}
<div className="text-white-1 font-Grotesk text-xl font-medium border-t border-b border-white-1 py-6 relative mt-[125px]">
<marquee direction="right">
  <div className="gap-x-5 flex">
    <span>
    ART COMING SOON
    </span>
    <img
      className="w-5"
      src="/images/movingLineImg.svg"
      alt="element"
    ></img>
       <span>
    ART COMING SOON
    </span>
    <img
      cclassName="w-5"
      src="/images/movingLineImg.svg"
      alt="element"
    ></img>
  </div>
</marquee>
</div>
{/*RUNNING_LINE_END*/}

{/*WHAT_YOU_NEED_TO_KNOW_SECTION_START*/}
<div className="text-white-1 mt-[150px]"> 
<h1 className="font-Plus font-extrabold text-5xl text-center flex justify-center"> 
  What you need to know 
</h1>
<h1 className="font-Plus font-extrabold text-5xl text-center flex justify-center"> 
  about YCLUB 
</h1>
</div>

<div className="flex flex-row text-white-1 font-Grotesk gap-[30px] leading-tight px-14 mt-28">  

    <div className="border rounded-xl border-white-1 basis-1/4 flex flex-col pt-[50px] pl-[20px] text-[28px] font-semibold text-left"> 
    Community first, Exclusivity by Necessity 
    <img
      className="w-[160px] flex pt-[315px]"
      src="/images/Vector.svg"
      alt="pic"
    ></img>
    </div>
   
    <div className="border rounded-xl border-white-1 basis-1/4 flex flex-col pt-[50px] pl-[20px] text-[28px] font-semibold">
    Lana Super Yacht Collection Supply:
    <span className="font-normal mt-[18px]">
    7000
    </span>
    <img
      className="w-[140px] flex justify-center pt-[250px] mx-14 mb-5"
      src="/images/Frame 16.svg"
      alt="pic"
    ></img>
    </div>
    <div className="border rounded-xl border-white-1 basis-1/4 flex flex-col pt-[50px] pl-[20px] text-[28px] font-semibold">
    PFP Allocation:
    <span className="font-normal mt-[18px]">
    WL access will be given to 
    </span>
    <img
      className="flex justify-center pt-[270px] mb-5"
      src="/images/Frame 17.svg"
      alt="pic"
    ></img>
    </div>
    <div className="border rounded-xl border-white-1 basis-1/4 flex flex-col pt-[50px] pl-[25px] pr-[5px] text-[28px] font-semibold">
    Fractional Ownership:
    <span className="font-normal mt-[18px]">
    Each NFT gives you fractional ownership of the 
    Metaverse Mega Yacht including a share of all revenue generated.
    </span> 
    <img
      className="w-[200px] flex justify-center pt-[40px] mb-5 ml-16"
      src="/images/Frame 18.svg"
      alt="pic"
    ></img>
    </div>
</div>
{/*WHAT_YOU_NEED_TO_KNOW_SECTION_END*/}

{/*ROADMAP SECTION START*/}
<div className="mt-52"> 
  <p className=" text-white-1 font-Plus font-semibold text-8xl text-left ml-14"> 
    The Roadmap
  </p>
<div className="relative overflow-x-scroll overflow-y-hidden h-[800px] mt-10"> 
<div> 
  <img          
    className="z-50 absolute mt-10 min-w-[2594px]"
    src="/images/roadMapLineTest.svg"
    alt="roadmap-line"
></img>
<img          
    className="absolute mt-12 min-w-[2594px]"
    src="/images/roadMapLineTestSecEl.svg"
    alt="roadmap-line"
></img>
<div className="absolute flex flex-row mx-28 top-[-150px]">
{/*one*/}
<div className="text-white-1 basis-[14.2%] pt-[300px] flex flex-col pr-[70px]"> 
<p className="text-gray-1 font-normal text-sm font-Grotesk pb-8">
QUARTER 1 OF 2022
</p>
<p className="font-Grotesk font-bold text-[32px] pb-4">
Drakar
</p>
<ul className="list-disc list-inside text-gray-1 font-normal text-xl pl-3 w-[300px]">
<li> Research &amp; Development </li>
<li>  Concept development</li>
</ul>
</div>

{/*two*/}
<div className="text-white-1 basis-[14.2%] pt-[300px] flex flex-col pr-[70px]"> 
<p className="text-gray-1 font-normal text-sm font-Grotesk pb-8">
QUARTER 2 OF 2022
</p>
<p className="font-Grotesk font-bold text-[32px] pb-4">
Cog
</p>
<ul className="list-disc list-inside text-gray-1 font-normal text-xl pl-3 w-[300px]">
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
<div className="text-white-1 basis-[14.2%] pt-[300px] flex flex-col pr-[70px]"> 
<p className="text-gray-1 font-normal text-sm font-Grotesk pb-8">
QUARTER 3 OF 2022
</p>
<p className="font-Grotesk font-bold text-[32px] pb-4">
Caravel
</p>
<ul className="list-disc list-inside text-gray-1 font-normal text-xl pl-3 w-[300px]">
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
<div className="text-white-1 basis-[14.2%] pt-[300px] flex flex-col pr-[70px]"> 
<p className="text-gray-1 font-normal text-sm font-Grotesk pb-8">
QUARTER 4 OF 2022
</p>
<p className="font-Grotesk font-bold text-[32px] pb-4">
Carrack
</p>
<ul className="list-disc list-inside text-gray-1 font-normal text-xl pl-3 w-[300px]">
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
<div className="text-white-1 basis-[14.2%] pt-[300px] flex flex-col pr-[70px]"> 
<p className="text-gray-1 font-normal text-sm font-Grotesk pb-8">
QUARTER 1 OF 2023
</p>
<p className="font-Grotesk font-bold text-[32px] pb-4">
Galleon
</p>
<ul className="list-disc list-inside text-gray-1 font-normal text-xl pl-3 w-[300px]">
<li> YCLUB Wallet </li>
<li> Debit Visa to cash rewards </li>
<li> Mega Yacht Collection Mint  </li>
<li> PFP Collection Airdrop </li>
</ul>
</div>
{/*six*/}
<div className="text-white-1 basis-[14.2%] pt-[300px] flex flex-col pr-[70px]"> 
<p className="text-gray-1 font-normal text-sm font-Grotesk pb-8">
QUARTER 2 OF 2023
</p>
<p className="font-Grotesk font-bold text-[32px] pb-4">
Frigate
</p>
<ul className="list-disc list-inside text-gray-1 font-normal text-xl pl-3 w-[300px]">
<li> 2nd Mega Yacht Crowdfunding mint </li>
<li>  YCLUB Metaverse Beta launch </li>
<li>  PFP Collection Airdrop   </li>
</ul>
</div>
{/*seven*/}
<div className="text-white-1 basis-[14.2%] pt-[300px] flex flex-col pr-[70px]"> 
<p className="text-gray-1 font-normal text-sm font-Grotesk pb-8">
QUARTER 3-4 OF 2023
</p>
<p className="font-Grotesk font-bold text-[32px] pb-4">
Clipper
</p>
<ul className="list-disc list-inside text-gray-1 font-normal text-xl pl-3 w-[300px]">
<li> Mega Party For Launching IRL the first Crowdfunded Yacht 
  (Provide Construction Update and Delivery Date) </li>
<li>  Creation of the Mega Yacht Owner’s Club </li>
</ul>
</div>
</div>

</div>


</div>

</div>
{/*ROADMAP SECTION END*/}

{/*TEAM SECTION START*/}

<div className="mx-14 text-white-1">
  <p className="font-Plus font-extrabold text-5xl text-center flex justify-center mb-[125px]"> 
    Team 
  </p>

  <div className="flex flex-row"> 
    <div className="flex flex-col basis-2/3"> 
      <div className="flex justify-between border-t border-gray-1 p-10"> 
      <p className="font-Plus text-2xl font-semibold"> 
        NEPTUNE 
      </p>
      <p className="text-gray-1 font-Grotesk text-xl font-normal"> 
        Founder 
      </p>
      <p className="flex text-gray-1 font-Grotesk text-lg font-light relative pr-16"> 
        @bermitchell 
        <img
          className="absolute right-[-5px] top-[-15px]"
          src="/images/teamSectionArrow.svg"
          alt="arrow_up"
        ></img>
      </p>
      </div>
      
      <div className="flex justify-between border-t border-gray-1 p-10"> 
      <p className="font-Plus text-2xl font-semibold"> 
        NEPTUNE 
      </p>
      <p className="text-gray-1 font-Grotesk text-xl font-normal"> 
        Founder 
      </p>
      <p className="flex text-gray-1 font-Grotesk text-lg font-light relative pr-16"> 
        @bermitchell 
        <img
          className="absolute right-[-5px] top-[-15px]"
          src="/images/teamSectionArrow.svg"
          alt="arrow_up"
        ></img>
      </p>
      </div>

      <div className="flex justify-between border-t border-gray-1 p-10"> 
      <p className="font-Plus text-2xl font-semibold"> 
        NEPTUNE 
      </p>
      <p className="text-gray-1 font-Grotesk text-xl font-normal"> 
        Founder 
      </p>
      <p className="flex text-gray-1 font-Grotesk text-lg font-light relative pr-16"> 
        @bermitchell 
        <img
          className="absolute right-[-5px] top-[-15px]"
          src="/images/teamSectionArrow.svg"
          alt="arrow_up"
        ></img>
      </p>
      </div>

      <div className="flex justify-between border-t border-gray-1 p-10"> 
      <p className="font-Plus text-2xl font-semibold"> 
        NEPTUNE 
      </p>
      <p className="text-gray-1 font-Grotesk text-xl font-normal"> 
        Founder 
      </p>
      <p className="flex text-gray-1 font-Grotesk text-lg font-light relative pr-16"> 
        @bermitchell 
        <img
          className="absolute right-[-5px] top-[-15px]"
          src="/images/teamSectionArrow.svg"
          alt="arrow_up"
        ></img>
      </p>
      </div>

      <div className="flex justify-between border-t  border-gray-1 p-10"> 
      <p className="font-Plus text-2xl font-semibold"> 
        NEPTUNE 
      </p>
      <p className="text-gray-1 font-Grotesk text-xl font-normal"> 
        Founder 
      </p>
      <p className="flex text-gray-1 font-Grotesk text-lg font-light relative pr-16"> 
        @bermitchell 
        <img
          className="absolute right-[-5px] top-[-15px]"
          src="/images/teamSectionArrow.svg"
          alt="arrow_up"
        ></img>
      </p>
      </div>

      <div className="flex justify-between border-t border-b border-gray-1 p-10"> 
      <p className="font-Plus text-2xl font-semibold"> 
        NEPTUNE 
      </p>
      <p className="text-gray-1 font-Grotesk text-xl font-normal"> 
        Founder 
      </p>
      <p className="flex text-gray-1 font-Grotesk text-lg font-light relative pr-16"> 
        @bermitchell 
        <img
          className="absolute right-[-5px] top-[-15px]"
          src="/images/teamSectionArrow.svg"
          alt="arrow_up"
        ></img>
      </p>
      </div>
      
    </div>

    <div className="flex basis-1/3 justify-center relative"> 
    <img
          className="absolute z-50 h-[350px]"
          src="/images/teamSectionPhoto.png"
          alt="team_section_ph"
        ></img>
     <img
          className="absolute  h-[90%] w-[100%]  top-[-125px] left-[-10px]"
          src="/images/teamSectionBlur.png"
          alt="team_section_blur"
        ></img>
    </div>  
  </div>
</div>
{/*TEAM SECTION END*/}

{/*VISION SECTION START*/}
<div className="mx-14 text-white-1 mt-[190px] text-left mb-[75px]"> 
  <div className="flex flex-col ">
    <p className="font-Plus font-semibold text-8xl "> 
      The Vision 
    </p>
      <p className="mt-[135px] w-[888px] font-Plus font-semibold text-[28px]"> 
       The world of luxury has evolved passed the physical and the material. 
       To experience the full breath of luxury today is to enter a curated world;
       a world that understands one’s desires to be serviced in extravagance, 
       entertained in excess, and provide you with more opportunities 
       to indulge with others. 
      </p>
  </div>

  <div className="text-gray-1 flex flex-row mt-[115px] font-Grotesk font-normal text-xl relative z-50">
      <div className="flex basis-1/2 justify-end"> 
      <p className="w-[420px]"> 
      Here at YCLUB, we unlock these experiences, 
      giving unique access to worlds of luxury that most 
      people couldn't fathom without first hand knowledge.
      </p>
      </div>
      <div className="flex basis-1/2 justify-end">
      <p className="w-[505px]"> 
      Our vision is to provide Mega Yacht experiences, 
      both in the Metaverse and IRL, for collectors looking 
      to be a part of the extravagant worlds being built in Web3. 
      Through this, collectors of YCLUB assets will have revenue 
      share opportunities, membership access, and directly support 
      cleaning the ocean through our green initiatives. 
      </p>
      </div>
  </div> 
  <div>



  </div>

</div>
{/*VISION SECTION END*/}


{/*WHITELIST SECTION START*/}
<div> 
<div className="relative flex"> 
<img          
    className="absolute top-[-110px] w-max object-cover h-[900px] min-w-[1440px]"
    src="/images/whitelistSectionWavesBg.png"
    alt="hero-bg"
></img>
</div>

<div className="relative z-50 flex"> 
<div className="absolute border border-white-1 bg-black-1 rounded-3xl text-white-1 flex flex-col w-[666px] h-[520px] pl-[57px] right-[150px] top-[200px]"> 
    <p className="font-Plus font-extrabold text-5xl pt-[70px]"> 
      Whitelist Request
    </p>
    <p className="font-Grotesk font-normal text-lg py-[30px]"> 
      Whitelist allows you to be the first inline to mint with a discount
    </p>
    
     <form>
      <label for="fwallet"></label>
      <input className="bg-black-1 text-gray-1 border rounded-full font-Plus font-normal text-sm py-[15px] pl-[22px] w-[547px]" 
      type="text" id="fname" 
      name="fwallet" value="Enter Wallet Address"></input>
    </form>  
    <form>
      <label for="email"></label>
      <input className="bg-black-1 text-gray-1 border rounded-full font-Plus font-normal text-sm py-[15px] pl-[22px] w-[547px] mt-5" 
      type="text" id="lname" 
      name="email" value="Enter Email Address"></input>
    </form>
     
   
  
    
    {/*BUTTON2 COMPONENT_START*/}
<div className=" text-white-1 mt-5 relative flex"> 

<button className= "w-[547px] relative py-4 px-12 text-black-2  bg-black-1 border-pink-1 shadow-inner shadow-pink-1 border rounded-full hover:py-4 hover:px-14 transition-all duration-700 disabled:bg-opacity-5 font-Grotesk text-base font-medium tracking-wider">
   APPLY FOR WHITELIST 
</button> 
</div>
  {/*BUTTON2 COMPONENT_END*/}

</div>
</div>
</div>
{/*WHITELIST SECTION END*/}




{/*Yclub SECTION START*/}
<div className="flex mt-[900px] mx-14 text-white-1 flex-col">
    <p className=" z-50 font-Plus font-semibold text-8xl mb-[45px]"> 
      YClub Community
    </p>
  <div className="flex flex-row border-t border-b">
  <div className="flex w-[440px] flex-col text-left font-Grotesk font-normal text-lg leading-[30px] pt-[60px]">
    <p> 
    Follow our twitter &amp;
    </p>
    <p> 
    Join our discord  
    </p>
  </div>
  <div className="flex w-[290px]  justify-center">
    <p className="border-l border-r font-Grotesk font-normal text-4xl py-[65px] px-[88px]"> 
    twitter
    </p>
  </div>
  <div className="flex w-[290px]  justify-center">
    <p className=" border-r font-Grotesk font-normal text-4xl py-[65px] px-[88px]"> 
    discord
    </p>
  </div>
  <div className="flex w-[290px]  justify-center">
    <p className="font-Grotesk font-normal text-4xl py-[65px] px-[88px]"> 
    contact
    </p>
  </div>


</div>
</div> 

{/*Yclub SECTION END*/}

{/*FAQ SECTION START*/}
<div className="text-white-1 mx-14 mt-[185px] mb-[150px]">

<p className="font-Plus font-extrabold text-5xl text-center flex justify-center mb-[125px]"> 
  What you need to know
</p>

<div className="flex flex-col mt-[110px]"> 
<div className="relative flex flex-col w-[796px] left-[250px]"> 

<div className="border-b border-gray-1 border-opacity-30"> 
  <div className="flex flex-row justify-between"> 
  <p className="font-Plus font-semibold text-2xl"> 
  What do I get as a YCLUB Member?
  </p>
  <img          
      src="/images/minusIconFaq.svg"
      alt="minus-icon"
  ></img>
  </div>
  <p className="text-gray-1 font-Grotesk font-normal text-xl pt-5 pb-4 w-[675px]"> 
  Here at YCLUB, we unlock these experiences, giving unique access to worlds
  of luxury that most people couldn't fathom without first hand knowledge.
  </p>
</div>
<div className="border-b border-gray-1 border-opacity-30"> 
  <div className="flex flex-row justify-between"> 
  <p className="font-Plus font-semibold text-2xl py-5"> 
  How do I get WL?
  </p>
  <img          
      src="/images/plusIconFaq.svg"
      alt="plus-icon"
  ></img>
  </div>
</div>
<div className="border-b border-gray-1 border-opacity-30"> 
  <div className="flex flex-row justify-between"> 
  <p className="font-Plus font-semibold text-2xl py-5"> 
  Why the Metaverse?
  </p>
  <img          
      src="/images/plusIconFaq.svg"
      alt="plus-icon"
  ></img>
  </div>
</div>
<div className="border-b border-gray-1 border-opacity-30"> 
  <div className="flex flex-row justify-between"> 
  <p className="font-Plus font-semibold text-2xl py-5"> 
  What Revenue Share?
  </p>
  <img          
      src="/images/plusIconFaq.svg"
      alt="plus-icon"
  ></img>
  </div>
</div>
<div className="border-b border-gray-1 border-opacity-30"> 
  <div className="flex flex-row justify-between"> 
  <p className="font-Plus font-semibold text-2xl py-5"> 
  Why did you make YCLUB?
  </p>
  <img          
      src="/images/plusIconFaq.svg"
      alt="plus-icon"
  ></img>
  </div>
</div>
<div className="border-b border-gray-1 border-opacity-30"> 
  <div className="flex flex-row justify-between"> 
  <p className="font-Plus font-semibold text-2xl py-5"> 
  What can you leak about YCLUB?
  </p>
  <img          
      src="/images/plusIconFaq.svg"
      alt="plus-icon"
  ></img>
  </div>
</div>






</div>
</div>
</div>

{/*FAQ SECTION END*/}


{/*FOOTER  START*/}
<footer className="relative z-50">
        <div className="flex items-center justify-between p-8 px-14 border-white-1 border-opacity-50 border-t font-Grotesk antialiased text-white-1"> 
          <a href="/">
            <img
              className="cursor-pointer"
              src="/images/yClubLogo.svg"
              alt="logotype"
            ></img>
          </a>
          {/*--menu-items--*/}
          <div className="animate-bounce flex pl-36 space-x-8 font-Grotesk text-sm">
          <a href="/">
            <img
              className="cursor-pointer"
              src="/images/footerArrow.svg"
              alt="logotype"
            ></img>
          </a>
           
            
            
          </div>

          <div className="flex space-x-8 font-Grotesk text-sm">
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#howItworks"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-white-1 transition-all duration-700"
              href="#faq"
            >
              Terms &amp; Conditions
            </a>
          </div>
          
        </div>
      </footer>
{/*FOOTER  END*/}




</div>
);
}
 
export default Index;