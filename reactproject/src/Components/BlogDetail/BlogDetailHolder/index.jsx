import React from "react";
import { BreadCrumbsBlogDetail } from "../BreadCrumbsBlogDetail";
import { BlogDetailCard } from "../BlogDetailCard";
import { MoreNewsSection } from "../MoreNewsSection";

const BlogDetailHolder = () => {
  return (
    <div className="w-5/6 h-auto m-auto">
      <div dir="rtl" className="w-full h-auto rounded-xl bg-white dark:bg-midnight_blue">
        <BreadCrumbsBlogDetail/>
      </div>
      <div>
        <BlogDetailCard/>
      </div>
      <div>
        <MoreNewsSection/>
      </div>
    </div>
  );
};

export { BlogDetailHolder };
