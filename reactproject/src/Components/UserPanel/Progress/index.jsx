import { CircularProgress } from "@mui/material";
import React from "react";
import Progress from "react-circle-progress-bar";
import { useSelector } from "react-redux";

const ProfileProgress = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Progress
        progress={86}
        strokeWidth={20}
        subtitle="تکمیل پروفایل"
        className="font-kalamehNum text-ocean_blue"
      />
    </div>
  );
};

export { ProfileProgress };
