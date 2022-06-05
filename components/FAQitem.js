import { useState } from "react";

const FAQitem = ({question, answer}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-1 border-opacity-30">
      <div className="flex flex-row justify-between pt-5 pb-5">
        <p className="font-Plus lg:text-2xl text-lg font-semibold">
          {question}
        </p>
        {isOpen ? (
          <img
            src="/images/minusIconFaq.svg"
            alt="minus-icon"
            onClick={() => setOpen(false)}
          />
        ) : (
          <img
            src="/images/plusIconFaq.svg"
            alt="plus-icon"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
      {isOpen && (
        <p className="lg:w-[675px] flex w-[300px] pb-4 font-Grotesk lg:text-xl text-base font-normal text-gray-1">
            {answer}
        </p>
      )}
    </div>
  );
};

export default FAQitem;
