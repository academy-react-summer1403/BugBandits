import React from "react";
import Switch from "../Switch";
import Accordion from "../Accordion";
import { InputRange } from "../InputRange";
import { useSelector } from "react-redux";

const FilterSection = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div className={`${darkMode && "dark"} w-72 h-[600px] bg-white dark:bg-midnight_blue rounded-3xl`}>
      <h1 className="text-cool_blue dark:text-white relative top-5 right-7">
        فیلتر ها
      </h1>
      <div className="w-5/6 h-10 border border-[#8d8d8d] rounded-xl m-auto mt-10">
        <h3 className="text-[#ACACAC] p-2 text-sm">تکمیل شده</h3>
        <Switch darkMode={darkMode} />
      </div>
      <div>
        <Accordion />
      </div>
      <div className="w-5/6 h-52 text-[#8d8d8d] text-sm border border-[#8d8d8d] rounded-xl m-auto mt-10">
        <div className=" flex flex-row m-4 mt-14">
          <h1>از</h1>
          <input
            type="text"
            className="w-14 h-6 outline-none border-b mx-3 dark:bg-midnight_blue"
          />
          <h1> تا </h1>
          <input
            type="text"
            className="w-14 h-6 outline-none border-b mx-3 dark:bg-midnight_blue"
          />
          <h1>تومان</h1>
        </div>
        <div className="mt-10">
          <InputRange />
          <div className="flex flex-row gap-32 text-xs pr-2">
            <h1>ارزان ترین</h1>
            <h1>گران ترین</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
