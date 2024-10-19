import React from "react";
import { ProfileView } from "../ProfileView";
import { HoverDevCards } from "../HoverButtons";

const Dashboard = () => {
  return (
    <div className="w-4/5 h-auto flex flex-col">
      <div className="w-full h-14 ">
        darkmode
      </div>
      <div className="w-full h-[1000px]">
        <div className="w-11/12 h-[900px] bg-white mx-10 rounded-3xl flex flex-row">
            <div>
                <div>
                    <ProfileView/>
                </div>
            </div>
            <div>
                <div>
                <HoverDevCards/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
