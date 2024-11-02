import React from "react";
import bg from "./../../../assets/images/blog/blogtitr.svg";
import { BlogCardB } from "../BlogCardB";

const BlogSecondRow = ({  news }) => {
  
  return (
    <div className="">
      {news?.news.slice(3).map((item) => (
        <BlogCardB
          key={item.id}
          id={item.id}
          title={item.title}
          miniDescribe={item.miniDescribe}
          addUserProfileImage={item.addUserProfileImage}

        />
      ))}
    </div>
  );
};

export { BlogSecondRow };
