import React from "react";
import { PanelHeader } from "../PanelHeader";
import { UnderLineTabs } from "../Tab";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className={`${darkMode ? "dark" : ""} w-11/12 h-auto flex flex-col`}>
      <div className="w-full h-14">
        <PanelHeader />
      </div>
      <div className="w-11/12 h-auto bg-white dark:bg-midnight_blue mx-10 rounded-3xl ">
        <UnderLineTabs />
      </div>
    </div>
  );
};

export { EditProfile };
