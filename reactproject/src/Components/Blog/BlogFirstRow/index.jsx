import React from "react";
import { BlogCardA } from "../BlogCardA";
import { useNavigate } from "react-router-dom";

const FirstRow = ({ news, id }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/blog/detail/${id}`);
  };
  return (
    <div className=" w-full h-[400px] flex flex-row ">
      {news?.news.map((item) => (
        <BlogCardA
          key={item.id}
          handleNavigation={handleNavigation}
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
