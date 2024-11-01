import React from "react";
import { FilterNavBar } from "../../Teachers/FilterNavBar";
import { FirstRow } from "../BlogFirstRow";
import { BlogSecondRow } from "../BlogSecondRow";
import { BlogHeader } from "../BlogHeader";
import { useNavigate } from "react-router-dom";

const BlogHolder = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/blog/detail");
  };
  return (
    <div dir="rtl" className="w-5/6 m-auto mt-10">
      <div>
        <FilterNavBar />
      </div>
      <BlogHeader />
      <div className="w-full h-auto bg-white mt-5 rounded-md flex flex-col">
        <div className="m-7 ">
          <FirstRow handleNavigation={handleNavigation} />
          <BlogSecondRow handleNavigation={handleNavigation} />
          <FirstRow handleNavigation={handleNavigation}/>
        </div>
      </div>
    </div>
  );
};

export { BlogHolder };
