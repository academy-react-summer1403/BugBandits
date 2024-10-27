import React from "react";
import { useSelector } from "react-redux";
import { TiStarFullOutline } from "react-icons/ti";
import { GiGraduateCap } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const TeacherInfoList = ({
  teacherId,
  fullName,
  pictureAddress,
  courseCounts,
}) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const navigate = useNavigate();
  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } w-2/5 h-64 bg-white dark:bg-midnight_blue mb-8 m-auto rounded-2xl flex flex-row`}
    >
      <div className="w-1/2 h-full relative left-8">
        <img
          src={pictureAddress}
          alt=""
          className="w-full h-[90%] bg-ocean_blue rounded-2xl mt-3 "
        />
      </div>
      <div className="w-3/5 h-full pt-4">
        <div className="w-11/12">
          <h1 className="text-cool_blue dark:text-white text-xl">{fullName}</h1>
          <p className="text-sm text-[#8C9AAC] dark:text-white text-justify pt-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <div className="w-11/12 flex flex-wrap gap-2 pt-5 text-white">
          <div className="w-28 h-6 bg-[#adadad] dark:bg-navy_blue rounded-lg pt-1 pr-2 flex flex-row">
            <BsClock />
            <span className="relative right-5 bottom-1 font-kalamehNum">
              15:26:45
            </span>
          </div>
          <div className="w-28 h-6 bg-[#adadad] dark:bg-navy_blue rounded-lg pt-1 pr-2 flex flex-row">
            <GiGraduateCap />
            <span className="relative right-12 bottom-1">PHD</span>
          </div>
          <div className="w-28 h-6 bg-[#adadad] dark:bg-navy_blue rounded-lg pt-1 pr-2 flex flex-row">
            <HiOutlineBookOpen />
            <span className="relative right-16 pr-2  whitespace-nowrap text-sm font-kalamehNum">
              {courseCounts}
            </span>
          </div>
          <div className="w-28 h-6 bg-[#adadad] dark:bg-navy_blue rounded-lg pt-1 pr-2 flex flex-row">
            <TiStarFullOutline />
            <span className="relative right-14 bottom-1 font-kalamehNum">
              5/5
            </span>
          </div>
        </div>
        <div className="w-11/12 h-10 mt-5 border-t-2">
          <div
            onClick={() => navigate(`/teachers/detail/${teacherId}`)}
            to="/"
            dir="ltr"
            className="flex flex-row mt-4"
          >
            <span className="cursor-pointer text-xs pr-2 text-ocean_blue">
              مشاهده جزيیات
            </span>
            <AiOutlineMinus className="cursor-pointer dark:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { TeacherInfoList };
