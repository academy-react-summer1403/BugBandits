import React from "react";
import bg from "./../../../assets/images/blog/bloglist.svg";
import { useNavigate } from "react-router-dom";

const MoreNewsCard = ({ title, miniDescribe, id }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/blog/detail/${id}`);
  };
  return (
    <div>
      <div className="w-72 h-96 rounded-3xl bg-white dark:bg-midnight_blue mt-20 px-5 pb-5">
        <div className="w-56rounded-3xl relative bottom-7">
          <img
            onClick={handleNavigation}
            src={bg}
            alt="not found"
            className="rounded-3xl m-auto cursor-pointer"
          />
        </div>
        <div className="overflow-hidden">
          <h1
            onClick={handleNavigation}
            className="text-xl text-charcoal_gray dark:text-white cursor-pointer hover:text-ocean_blue"
          >
            {title}
          </h1>
          <p className="text-sm text-justify text-[#8D8D8D] dark:text-white ">
            {miniDescribe}
          </p>
        </div>
      </div>
    </div>
  );
};

export { MoreNewsCard };
