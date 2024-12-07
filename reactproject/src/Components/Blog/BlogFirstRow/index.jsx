import React from "react";
import { BlogCardA } from "../BlogCardA";
import { useNavigate } from "react-router-dom";

const FirstRow = ({ news }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[400px] flex flex-row">
      {news?.news.slice(0, 4).map((item) => (
        <BlogCardA
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

export { FirstRow };
