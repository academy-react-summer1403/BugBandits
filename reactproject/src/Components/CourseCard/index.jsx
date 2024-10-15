import React from "react";
import course from "../../assets/images/landing/course.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({ tumbImageAddress, title, describe, teacherName , id }) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const navigate = useNavigate();
  return (
    // <div className="border w-full">
    <div
      className={`${
        darkMode && "dark"
      }  w-72 h-[400px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-16 bg-white rounded-3xl dark:bg-midnight_blue`}
    >
      <div className="w-full h-44 flex justify-center relative bottom-10 ">
        <img onClick={() => navigate("/courses/datailpage/" + id)} src={tumbImageAddress} alt="not found" className="border rounded-xl w-64 h-full" />
      </div>
      <div dir="rtl" className="w-full h-auto  px-5 relative bottom-10">
        <div className="h-10">
          <h1 className="text-cool_blue text-lg sm:text-xl font-bold dark:text-cloud_grey pt-2">
            {title}
          </h1>
        </div>
        <div className="h-24 mb-5">
          <p className="text-xs text-justify text-dusty_blue dark:text-cloud_grey ">
            {describe}
          </p>
        </div>
        <div className="w-full h-10">
          <h4 className="text-xs sm:text-sm text-ocean_blue font-bold dark:text-cloud_grey">
            <span className="text-2xl pl-2 ">.</span>
            {teacherName}
          </h4>
        </div>
      </div>
      <div className="border-t-2 h-10 mx-5 mt-4 flex gap-40 relative bottom-12">
        <div className="w h-5 text-white rounded-xl bg-[#adadad] mt-3 pl-2"></div>
        <div>
          <span className="text-ocean_blue font-bold pt-2 block dark:text-cloud_grey whitespace-nowrap">
            !رایگان
          </span>
        </div>
      </div>
    </div>
    // </div>
  );
};

export { Card };
