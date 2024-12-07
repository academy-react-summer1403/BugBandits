import React from "react";
import bg from "./../../../assets/images/blog/blogtitr.svg";
import { useNavigate } from "react-router-dom";

const BlogCardB = ({ id, title, miniDescribe, addUserProfileImage }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/blog/detail/${id}`);
  };

  return (
    <div
      onClick={handleNavigation}
      className="my-8 border-x-4 border-dark_gray overflow-hidden relative cursor-pointer"
    >
      <img
        src={bg}
        className="w-full h-[400px] px-3 scale-y-110 filter brightness-50"
        alt="Blog Background"
      />
      <div className="w-5/6 m-auto absolute top-36 right-24">
        <h1 className="text-center font-iranSansBold text-3xl text-white">
          {title}
        </h1>
        <p className="text-center mt-8 text-lg text-white">{miniDescribe}</p>
      </div>
    </div>
  );
};

export { BlogCardB };
