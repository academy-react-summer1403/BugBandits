import React from "react";
import { BlogCardA } from "../BlogCardA";
import { BlogCardB } from "../BlogCardB";

const FirstRow = ({ handleNavigation, news }) => {
  return (
    <div className=" w-full h-[400px] flex flex-row ">
      <BlogCardA
        key={news.id}
        handleNavigation={handleNavigation}
        id={news.id}
        title={news.title}
      />
      <BlogCardB handleNavigation={handleNavigation} />
      <BlogCardA handleNavigation={handleNavigation} />
      <BlogCardB handleNavigation={handleNavigation} />
    </div>
  );
};

export { FirstRow };
