import { Checkbox } from "@material-tailwind/react";
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
              <div className="inline-flex items-center mr-8">
                <Checkbox
                  color="blue"
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={checkedItems[index]}
                  onChange={() => handleCheckboxChange(index)}
                  className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-indigo-600 checked:border-indigo-600"
                />
                <label
                  className="cursor-pointer mr-2 text-[#ACACAC] text-base"
                  htmlFor={`checkbox-${index}`}
                >
                  {item.techName}
                  {item.levelName}
                  {item.typeName}
                  {item.fullName}
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { AccordionItem };
