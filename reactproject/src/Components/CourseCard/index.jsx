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
const Card = ({
  id,
  tumbImageAddress,
  title,
  describe,
  teacherName,
  cost,
  userFavoriteId,
  isUserFavorite,
  likeCount: initialLikeCount,
  userIsLiked: initialUserIsLiked,
  userLikedId,
  dissLikeCount: initialDisLikeCount,
  currentUserDissLike: initialUserIsDisLiked,CourseId
}) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn || false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/courses/detailpage/${id}`);
  };

  
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLiked, setIsLiked] = useState(initialUserIsLiked);
  const [disLikeCount, setDisLikeCount] = useState(initialDisLikeCount);
  const [isDisLiked, setIsDisLiked] = useState(initialUserIsDisLiked);
  const [isFavorited, setIsFavorited] = useState(isUserFavorite);

  const showLoginToast = () => {
    toast.error("لطفا وارد حساب کاربری خود شوید");
  };

  const handleFavorite = async () => {
    if (!isLoggedIn) {
      showLoginToast();
      return;
    }

    try {
      if (!isFavorited) {
        await AddCourseFavorite({ courseId: id });
        toast.success("دوره به علاقه‌مندی‌ها اضافه شد");
      } else {
        const data = new FormData();
        data.append("CourseFavoriteId", userFavoriteId);
        await DeletFavorite(data);
        toast.success("دوره از علاقه‌مندی‌ها حذف شد");
      }
      setIsFavorited((prev) => !prev);
    } catch (error) {
      toast.error("عملیات ناموفق بود. دوباره امتحان کنید.");
      console.error("Favorite Error:", error);
    }
  };

  const toggleLike = async () => {
    if (!isLoggedIn) {
      showLoginToast();
      return;
    }

    try {
      if (isLiked) {
        const data = new FormData();
        data.append("CourseLikeId", userLikedId);
        await DeletCourseLike(data);
        setLikeCount((prev) => prev - 1);
        toast.success("لایک حذف شد");
      } else {
        await AddCourseLike(id);
        setLikeCount((prev) => prev + 1);
        toast.success("لایک شد");
        if (isDisLiked) {
          setDisLikeCount((prev) => prev - 1);
          setIsDisLiked(false);
        }
      }
      setIsLiked((prev) => !prev);
    } catch (error) {
      toast.error("عملیات ناموفق بود. دوباره امتحان کنید.");
      console.error("Like Error:", error);
    }
  };

  const toggleDislike = async () => {
    if (!isLoggedIn) {
      showLoginToast();
      return;
    }

    try {
      if (isDisLiked) {
        const data = new FormData();
        data.append("CourseDisLikeId", userLikedId);
        await DeletCourseDisLike(data);
        setDisLikeCount((prev) => prev - 1);
        toast.success("دیسلایک حذف شد");
      } else {
        await AddCourseDissLike(id);
        setDisLikeCount((prev) => prev + 1);
        toast.success("دیسلایک شد");
        if (isLiked) {
          setLikeCount((prev) => prev - 1);
          setIsLiked(false);
        }
      }
      setIsDisLiked((prev) => !prev);
    } catch (error) {
      toast.error("عملیات ناموفق بود. دوباره امتحان کنید.");
      console.error("Dislike Error:", error);
    }
  };

  return (
    <div
      className={`${
        darkMode && "dark"
      } w-72 h-[400px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-16 bg-white rounded-3xl dark:bg-midnight_blue`}
    >
      <div className="w-full h-44 flex justify-center relative bottom-10 ">
        <img
          onClick={handleNavigation}
          src={
            tumbImageAddress && tumbImageAddress.trim() !== ""
              ? tumbImageAddress
              : courseimg
          }
          alt="not found"
          className="rounded-xl w-64 h-full cursor-pointer"
        />
      </div>
      <div dir="rtl" className="w-full h-auto px-5 relative bottom-10">
        <div className="h-10">
          <h1
            onClick={handleNavigation}
            className="text-cool_blue text-lg font-bold dark:text-cloud_grey pt-2 cursor-pointer hover:text-ocean_blue"
          >
            {title}
          </h1>
        </div>
        <div className="h-24 mb-5">
          <p className="text-xs text-justify text-dusty_blue dark:text-cloud_grey ">
            {describe}
          </p>
        </div>
        <div className="w-full h-10">
          <h4 className="text-xs sm:text-sm flex flex-row gap-1 text-cool_blue font-bold dark:text-cloud_grey">
            <HiOutlineUser /> {teacherName}
          </h4>
        </div>
        <div className="flex flex-row border-t-2">
          <div className="w-1/2 text-cool_blue dark:text-white flex mt-4 gap-2">
            <MdFavoriteBorder
              onClick={handleFavorite}
              className={`w-5 h-5 cursor-pointer ${
                isFavorited ? "text-light-blue-400" : ""
              }`}
            />
            <BiDislike
              onClick={toggleDislike}
              className={`w-5 h-5 cursor-pointer ${
                isDisLiked ? "text-red-500" : ""
              }`}
            />
            <span className="text-xs font-kalamehNum">{disLikeCount}</span>
            <BiLike
              onClick={toggleLike}
              className={`w-5 h-5 cursor-pointer ${
                isLiked ? "text-blue-500" : ""
              }`}
            />
            <span className="text-xs font-kalamehNum">{likeCount}</span>
          </div>
          <div className="w-1/2">
            <h1 className="whitespace-nowrap mt-4 text-left text-cool_blue dark:text-white font-kalamehNum">
              {cost} تومان
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
