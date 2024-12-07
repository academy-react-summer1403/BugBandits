import React from "react";
import bg from "./../../../assets/images/blog/bloglist.svg";
import { useNavigate } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";

const BlogCardA = ({ id, title, miniDescribe, addUserProfileImage }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/blog/detail/${id}`);
  };
  return (
    <div key={id} className=" w-full h-full border-l-4 border-dark_gray">
      <div className="w-64 m-auto cursor-pointer">
        <img
          onClick={handleNavigation}
          src={bg}
          className="hover:scale-105 hover:brightness-75 transition-all duration-300"
        />
      </div>
      <div className="w-64 m-auto mt-5 text-justify overflow-clip dark:text-white">
        <h1
          onClick={handleNavigation}
          className="font-bold text-xl cursor-pointer hover:text-ocean_blue"
        >
          {title}
        </h1>
        <p className="text-sm text-justify">{miniDescribe}</p>
      </div>{" "}
      <div className="w-1/2 text-cool_blue dark:text-white flex mt-12 gap-2 mr-5">
        <MdFavoriteBorder className={"w-5 h-5 cursor-pointer "} />
        <BiDislike className={"w-5 h-5 cursor-pointer "} />
        <BiLike className={"w-5 h-5 cursor-pointer "} />
      </div>
    </div>
  );
};

export { BlogCardA };
