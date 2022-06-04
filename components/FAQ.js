import FAQitem from "./FAQitem";

const FAQ = () => {
  return (
    <div className="mx-14 mt-[185px] mb-[150px] text-white-1">
      <p className="mb-[125px] flex justify-center text-center font-Plus text-5xl font-extrabold">
        What you need to know
      </p>

      <div className="mt-[110px] flex flex-col">
        <div className="relative left-[250px] flex w-[796px] flex-col">
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
