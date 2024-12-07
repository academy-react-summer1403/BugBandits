import React from "react";
import { IoMdLink } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const TeacherDetailHeader = ({
  fullName,
  courseCounts,
  newsCount,
  pictureAddress,
  linkdinProfileLink,
}) => {
  return (
    <div className="w-full h-auto mt-10 bg-white dark:bg-midnight_blue rounded-xl flex flex-col lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-4 lg:mb-0">
        {pictureAddress ? (
          <img
            src={pictureAddress}
            alt="Teacher"
            className="w-40 h-40 lg:w-96 lg:h-80 bg-ocean_blue rounded-2xl border m-5"
          />
        ) : (
          <div className="w-40 h-40 lg:w-96 lg:h-80 bg-ocean_blue rounded-2xl border m-5 justify-center flex items-center">
            <FaUser className="text-gray-500 md:w-52 md:h-52 w-32 h-32" />
          </div>
        )}
      </div>

      <div className="w-full lg:w-2/3 p-5 lg:p-10">
        <div className="text-center lg:text-right">
          <h1 className="text-xl lg:text-2xl font-bold text-ocean_blue mb-2 dark:text-white">
            {fullName}
          </h1>
        </div>

        <p className="text-sm lg:text-lg text-dusty_blue text-justify dark:text-white">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        </p>
        <span className="text-sm lg:text-lg text-dusty_blue mt-2 text-justify dark:text-white flex flex-row">
          <IoMdLink className="w-6 h-6 ml-2 text-slate_dark" />
          ادرس لینکدین :
          <span className="text-sm lg:text-lg text-dusty_blue text-justify dark:text-white">
            {linkdinProfileLink}
          </span>
        </span>

        <div className="flex flex-wrap lg:flex-row gap-5 lg:gap-20 text-sm lg:text-xl text-dusty_blue dark:text-white pt-5 justify-center ">
          <div className="flex flex-col items-center">
            <h1>دوره فعال</h1>
            <h1 className="font-kalamehNum">{courseCounts}</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1>دوره تکمیل شده</h1>
            <h1 className="font-kalamehNum">{newsCount}</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1>امتیاز</h1>
            <h1 className="font-kalamehNum">5/5</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1>دوره فعال</h1>
            <h1 className="font-kalamehNum">{newsCount}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TeacherDetailHeader };
