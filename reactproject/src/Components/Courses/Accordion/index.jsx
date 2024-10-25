import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  const [checkedItems, setCheckedItems] = useState(
    Array(content.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex justify-between w-5/6 h-10 border border-[#8d8d8d] rounded-xl m-auto mt-5 items-center p-4 text-left focus:outline-none"
      >
        <span className="font-medium text-[#ACACAC]">{title}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <RiArrowDownSLine className="text-[#acacac]" />
        </span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-700">
          {content.map((item, index) => (
            <div key={index} className="flex items-center">
              <div class="inline-flex items-center mr-8">
                <label class="flex items-center cursor-pointer relative mb-2">
                  <input
                    type="checkbox"
                    id={`checkbox-${index}`}
                    checked={checkedItems[index]}
                    onChange={() => handleCheckboxChange(index)}
                    class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-indigo-600 checked:border-indigo-600"
                  />
                  <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  class="cursor-pointer mr-2 text-[#ACACAC] text-base"
                  htmlFor={`checkbox-${index}`}
                >
                  {item}
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
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
      title: "سطح دوره",
      content: ["مبتدی", "متوسط", "پیشرفته"],
    },
    {
      title: "نحوه برگزاری",
      content: ["آنلاین", "حضوری", "آنلاین-حضوری"],
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
