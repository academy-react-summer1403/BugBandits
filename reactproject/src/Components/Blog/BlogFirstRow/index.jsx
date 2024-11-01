import React from "react";
import bg from "./../../../assets/images/blog/bloglist.svg";
import { BlogCardA } from "../BlogCardA";
import { BlogCardB } from "../BlogCardB";

const FirstRow = ({ handleNavigation }) => {
  return (
    <div className=" w-full h-[400px] flex flex-row ">
      <BlogCardA handleNavigation={handleNavigation} />
      <BlogCardB handleNavigation={handleNavigation} />
      <BlogCardA handleNavigation={handleNavigation}/>
      <BlogCardB handleNavigation={handleNavigation}/>
    </div>
  );
};

export { FirstRow };
