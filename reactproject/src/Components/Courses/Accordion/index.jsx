import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex justify-between w-5/6 h-10 border border-[#8d8d8d] rounded-xl m-auto mt-5 items-center p-4 text-left focus:outline-none"
      >
        <span className="font-semibold">{title}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <RiArrowDownSLine className="text-[#acacac]"/>
        </span>
      </button>
      {isOpen && <div className="p-4 text-gray-700">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
    },
    {
      title: "",
      content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
