import React from "react";
import { UserInfo } from "../UserInformation";
import { PanelHeader } from "../PanelHeader";
import { UnderLineTabs } from "../Tab";

const EditProfile = () => {
  return (
    <div className="w-11/12 h-auto flex flex-col">
      <div className="w-full h-14">
        <PanelHeader />
      </div>
      <div className="w-11/12 h-auto bg-white mx-10 rounded-3xl ">
        <UnderLineTabs />
      </div>
    </div>
  );
};

export { EditProfile };
