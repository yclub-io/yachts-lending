import FAQitem from "./FAQitem";

const FAQ = () => {
  return (
    <div className="lg:mx-14 mx-4 lg:mt-[185px] mt-[100px] lg:mb-[150px] mb-[100px]  text-white-1">
      <p className="lg:mb-[125px] mb-[40px] flex justify-center text-center font-Plus lg:text-5xl text-[26px] font-extrabold">
        What you need to know
      </p>

      <div className="lg:mt-[110px] flex justify-center">
        <div className="relative flex w-[796px] flex-col">
          <FAQitem
            question="What do I get as a YCLUB Member?"
            answer="Here at YCLUB, we unlock these experiences, giving unique access to
          worlds of luxury that most people couldn't fathom without first hand
          knowledge."
          />
          <FAQitem question="How do I get WL?" answer="" />
          <FAQitem question="Why the Metaverse?" answer="" />
          <FAQitem question="What Revenue Share?" answer="" />
          <FAQitem question="Why did you make YCLUB?" answer="" />
          <FAQitem question="What can you leak about YCLUB?" answer="" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
