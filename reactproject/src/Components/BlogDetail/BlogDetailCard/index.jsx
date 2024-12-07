import React, { useState } from "react";
import bg from "./../../../assets/images/blog/bloglist.svg";
import { TiStarFullOutline } from "react-icons/ti";
import { BiLike, BiDislike } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { HiEye } from "react-icons/hi2";
import { MdOutlineComment } from "react-icons/md";
import toast from "react-hot-toast";
import { newsLike } from "../../../Core/Services/api/NewsApi/ِDetailApi/like.api";
import { newsDissLike } from "../../../Core/Services/api/NewsApi/ِDetailApi/dislike.api";
import { addFavoriteNews } from "../../../Core/Services/api/NewsApi/ِDetailApi/addfav.api";

const BlogDetailCard = ({
  id,
  title,
  describe,
  insertDate,
  currentRate,
  currentView,
  currentLikeCount,
  addUserFullName,
  commentsCount,
  inUsersFavoriteCount,
  currentDissLikeCount,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [likeCount, setLikeCount] = useState(currentLikeCount);
  const [dislikeCount, setDislikeCount] = useState(currentDissLikeCount);
  const [favoriteCount, setFavoriteCount] = useState(inUsersFavoriteCount);

  const handleLike = async () => {
    if (!isLiked) {
      setIsLiked(true);
      setIsDisliked(false);
      setLikeCount(likeCount + 1);
      if (isDisliked) setDislikeCount(dislikeCount - 1);
    }
    try {
      const response = await newsLike(id);
      if (response.status === 200) {
        toast.success("لایک ثبت شد!");
      }
    } catch (error) {
      toast.success("لایک ثبت شد!");
    }
  };

  const handleDislike = async () => {
    if (!isDisliked) {
      setIsDisliked(true);
      setIsLiked(false);
      setDislikeCount(dislikeCount + 1);
      if (isLiked) setLikeCount(likeCount - 1);
    }
    try {
      const response = await newsDissLike(id);
      if (response.status === 200) {
        toast.success("دیسلایک ثبت شد!");
      }
    } catch (error) {
      toast.success("دیسلایک ثبت شد!");
    }
  };

  const handleAddFavorite = async () => {
    if (!isFavorited) {
      setIsFavorited(true);
      setFavoriteCount(favoriteCount + 1);
    }
    try {
      const response = await addFavoriteNews(id);
      if (response.status === 200) {
        toast.success("به علاقه‌مندی‌ها اضافه شد!");
      }
    } catch (error) {
      toast.success("به علاقه‌مندی‌ها اضافه شد!");
    }
  };

  return (
    <div dir="rtl" className="w-full h-[500px] flex justify-between relative">
      <div className="flex flex-row mt-10">
        <div className="w-80 h-80 rounded-2xl z-50">
          <img src={bg} alt="not found" className="rounded-2xl" />
        </div>
        <div className="w-80 h-80 bg-[#9F9F9F] rotate-12 rounded-2xl absolute -right-7 z-20" />
        <div className="m-7">
          <h1 className="font-bold text-3xl text-charcoal_gray dark:text-light_blue">
            {title}
          </h1>
        </div>
        <div
          dir="ltr"
          className="w-56 h-10 absolute top-20 right-[1030px] flex gap-4 text-[#9F9F9F] items-center"
        >
          <span className="font-kalamehNum dark:text-light_blue">
            {new Date(insertDate).toLocaleDateString("fa-IR")}
          </span>
          <span className="font-kalamehNum dark:text-light_blue">
            {new Date(insertDate).toLocaleTimeString("fa-IR")}
          </span>
          <span className="flex flex-row">
            <TiStarFullOutline className="w-5 h-5 dark:text-light_blue" />
            <span className="font-kalamehNum dark:text-light_blue">
              {currentRate}/5
            </span>
          </span>
          <span className="flex flex-row">
            <HiEye className="w-6 h-6 pr-1 dark:text-light_blue" />
            <span className="font-kalamehNum dark:text-light_blue">
              {currentView}
            </span>
          </span>
        </div>
      </div>
      <div className="w-11/12 h-80 pr-64 pl-12 pt-10 bg-white dark:bg-midnight_blue rounded-2xl absolute top-32 right-24">
        <p className="text-xl h-56 text-charcoal_gray dark:text-white text-justify overflow-hidden">
          {describe}
        </p>
        <div dir="ltr" className="w-full flex flex-row gap-5 font-kalamehNum">
          <MdFavoriteBorder
            onClick={handleAddFavorite}
            className={`w-6 h-6 cursor-pointer ${
              isFavorited ? "text-red-500" : "dark:text-white"
            }`}
          />
          <span className="dark:text-white">{favoriteCount}</span>
          <BiDislike
            onClick={handleDislike}
            className={`w-6 h-6 cursor-pointer ${
              isDisliked ? "text-blue-500" : "dark:text-white"
            }`}
          />
          <span className="dark:text-white">{dislikeCount}</span>
          <BiLike
            onClick={handleLike}
            className={`w-6 h-6 cursor-pointer ${
              isLiked ? "text-green-500" : "dark:text-white"
            }`}
          />
          <span className="dark:text-white">{likeCount}</span>
          <MdOutlineComment className="w-6 h-6 dark:text-white" />
          <span className="dark:text-white">{commentsCount}</span>
        </div>
      </div>
      <div className="w-auto h-10 bg-[#d1d1d1] absolute top-[448px] right-[950px] rounded-b-xl">
        <h1 className="text-[#7b7b7b] text-center p-2 whitespace-nowrap">
          نوشته شده توسط: {addUserFullName}
        </h1>
      </div>
    </div>
  );
};

export { BlogDetailCard };
