import React from "react";
import { ProfileView } from "../ProfileView";
import { HoverButtons } from "../HoverButtons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const percentage = 50;

  return (
    <div className="w-9/12 h-auto flex flex-col">
      <div className="w-full h-14">darkmode</div>
      <div className="w-full h-[1000px]">
        <div className="w-11/12 h-[900px] bg-white mx-10 rounded-3xl flex flex-row">
          <div className="pr-10">
            <div>
              <ProfileView />
            </div>
            <div></div>
          </div>
          <div>
            <div className="flex flex-wrap pt-12 pr-14">
              <HoverButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
