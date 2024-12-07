import React, { useState } from "react";
import course from "../../assets/images/landing/course.svg";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import imgcourse from "./../../assets/images/landing/course.svg";
import {
  AddCourseLike,
  DeletCourseLike,
} from "../../Core/Services/api/CourseApi/likecourse";
import {
  AddCourseDissLike,
  DeletCourseDisLike,
} from "../../Core/Services/api/CourseApi/dislikecourse";
import toast from "react-hot-toast";
import { AddCourseFavorite } from "../../Core/Services/api/CourseApi/addfav";
import courseimg from "./../../assets/images/coursedetail/courseimg.svg";

const TeacherCoursesCard = ({
    title,
    describe,
    teacherName,
    cost,
    tumbImageAddress,
    id,
  }) => {
    const darkMode = useSelector((state) => state.darkMode.value);
    const navigate = useNavigate();
  
    const handleNavigation = () => {
      navigate(`/courses/detailpage/${id}`);
    };
  
    return (
      <div
        className={`${
          darkMode && "dark"
        } w-72 h-[400px] max-w-xs bg-white rounded-3xl dark:bg-midnight_blue`}
      >
        <div className="w-full h-44 flex justify-center relative">
          <img
            onClick={handleNavigation}
            src={tumbImageAddress || courseimg}
            alt={title}
            className="rounded-xl w-64 h-full cursor-pointer"
          />
        </div>
        <div dir="rtl" className="px-5">
          <h1
            onClick={handleNavigation}
            className="text-cool_blue text-lg font-bold dark:text-cloud_grey pt-2 cursor-pointer hover:text-ocean_blue"
          >
            {title}
          </h1>
          <p className="text-xs text-dusty_blue dark:text-cloud_grey">
            {describe}
          </p>
          <h4 className="text-xs flex items-center text-cool_blue dark:text-cloud_grey mt-2">
            <HiOutlineUser className="mr-1" /> {teacherName}
          </h4>
          <div className="border-t mt-3 pt-2 flex justify-between">
            <h1 className="text-cool_blue dark:text-white">{cost} تومان</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export { TeacherCoursesCard };
  
