import React from "react";
import { useSelector } from "react-redux";
import { TiStarFullOutline } from "react-icons/ti";
import { GiGraduateCap } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const TeacherInfoList = ({
  teacherId,
  fullName,
  pictureAddress,
  courseCounts,
}) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const navigate = useNavigate();
  return (
    <div className="flex w-full">
      <div
        className={`hidden md:flex ${
          darkMode ? "dark" : ""
        } w-1/2 h-64 bg-white dark:bg-midnight_blue mb-8 m-auto rounded-2xl flex-row`}
      >
        <div className="w-1/2 h-full relative left-8">
          {pictureAddress ? (
            <img
              src={pictureAddress}
              alt="User"
              className="w-full h-[90%] bg-ocean_blue rounded-2xl mt-3 border"
            />
          ) : (
            <div className="w-full h-[90%] bg-ocean_blue rounded-2xl mt-3 border flex items-center justify-center">
              <FaUser className="text-gray-500 w-32 h-32" />
            </div>
          )}
        </div>
        <div className="w-3/5 h-full pt-4">
          <div className="w-11/12">
            <h1 className="text-cool_blue dark:text-white text-xl">
              {fullName ? fullName : "کاربر"}
            </h1>
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

      <div
        className={`flex md:hidden ${
          darkMode ? "dark" : ""
        } w-full h-auto bg-white dark:bg-midnight_blue mb-8 rounded-lg flex-col p-4`}
      >
        <img
          src={pictureAddress}
          alt=""
          className="w-32 h-32 bg-ocean_blue rounded-full mx-auto border mb-4"
        />
        <h1 className="text-cool_blue dark:text-white text-center text-lg">
          {fullName}
        </h1>
        <p className="text-sm text-[#8C9AAC] dark:text-white text-center mt-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
        <div className="flex justify-around  text-white">
          <div className="flex flex-col items-center">
            <BsClock />
            <span className="font-kalamehNum text-sm">15:26:45</span>
          </div>
          <div className="flex flex-col items-center">
            <GiGraduateCap />
            <span className="text-sm">PHD</span>
          </div>
          <div className="flex flex-col items-center">
            <HiOutlineBookOpen />
            <span className="font-kalamehNum text-sm">{courseCounts}</span>
          </div>
          <div className="flex flex-col items-center">
            <TiStarFullOutline />
            <span className="font-kalamehNum text-sm">5/5</span>
          </div>
        </div>
        <div className="w-11/12 h-10 border-t-2">
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
