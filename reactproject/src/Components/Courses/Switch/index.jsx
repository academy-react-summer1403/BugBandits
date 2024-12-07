import React, { useState } from "react";

const Switch = ({ darkMode }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`${darkMode && "dark"} flex items-center`}>
      <button
        onClick={toggleSwitch}
        className={`relative bottom-[26px] right-[185px] inline-flex items-center h-5 rounded-lg w-12 transition-colors duration-200 ease-in-out ${
          isOn
            ? "bg-ocean_blue"
            : "bg-white dark:bg-midnight_blue  border border-[#acacac]"
        }`}
      >
        <span
          className={`transform transition-transform duration-200 ease-in-out ${
            isOn
              ? "-translate-x-1 bg-white"
              : "-translate-x-8 bg-[#8d8d8d] dark:bg-white"
          } inline-block w-3 h-3  rounded-full`}
        />
      </button>
    </div>
  );
};

export default Switch;
