import { useState } from "react";

const FAQitem = ({question, answer}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-1 border-opacity-30">
      <div className="flex flex-row justify-between">
        <p className="font-Plus text-2xl font-semibold">
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
        <p className="w-[675px] pt-5 pb-4 font-Grotesk text-xl font-normal text-gray-1">
            {answer}
        </p>
      )}
    </div>
  );
};

export default FAQitem;
