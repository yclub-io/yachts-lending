import FAQitem from "./FAQitem";

const FAQ = () => {
  return (
    <div className="lg:mx-14 mx-4 lg:mt-[185px] mt-[100px] lg:mb-[150px] mb-[100px]  text-white-1">
      <p id="faq" className="lg:mb-[125px] mb-[40px] flex justify-center text-center font-Plus lg:text-5xl text-[26px] font-extrabold">
        What you need to know
      </p>

      <div className="lg:mt-[110px] flex justify-center">
        <div className="relative flex w-[796px] flex-col">
          <FAQitem
            question="What do I get as a YCLUB Member?"
            answer="Fractional ownership in Mega Yachts that are built
             in the Metaverse + IRL rewards to continue the
            extravagant experiences offline"
          />
          <FAQitem question="How do I get WL?" answer="We’ll be releasing the collection
           in tiers while providing select WL opportunities per tier. 
           The best way to stay updated on WL opportunities is by joining
          our Telegram and Twitter" />
          <FAQitem question="Why the Metaverse?" answer="The Metaverse is where business
           and entertainment of all kinds will be when
          not being experienced IRL. We want our community
           to be able to take advantage of the business opportunities
          available because of this, and share in the revenue that will be generated" />
          <FAQitem question="What Revenue Share?" answer="As a YCLUB NFT holder, you receive
           a share of the revenue generated from the Mega Yacht we’ve built in the Metaverse" />
          <FAQitem question="Why did you make YCLUB?" answer="We made YCLUB to give the everyday
          person access to Mega Yacht experiences and business 
          opportunities that would have normally been reserved for the 1% of the 1%. We also see YCLUB
          as a resource that can help in the cleaning of our oceans and carrying
          the need for this to larger platforms. " />
          <FAQitem question="What can you leak about YCLUB?" answer="Our ambition is in building a brand
          with unparalleled luxury and extravagance that doesn’t stop in just the real world by using aligned incentives.
          We are going to build the most extravagant NFT project in the world…" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
