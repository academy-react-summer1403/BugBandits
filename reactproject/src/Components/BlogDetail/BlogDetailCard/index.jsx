import React from "react";
import bg from "./../../../assets/images/blog/bloglist.svg";
import { TiStarFullOutline } from "react-icons/ti";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { HiEye } from "react-icons/hi2";
import { MdOutlineComment } from "react-icons/md";

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

  return (
    <div dir="rtl" className="w-full h-[500px] flex justify-between relative">
      <div className="flex flex-row mt-10">
        <div className="w-80 h-80 rounded-2xl z-50">
          <img src={bg} alt="not found" className="rounded-2xl" />
        </div>
        <div className="w-80 h-80 bg-[#9F9F9F] rotate-12 rounded-2xl absolute -right-7 z-20" />
        <div className="m-7">
          <h1 className="font-bold text-3xl text-charcoal_gray">{title}</h1>
        </div>
        <div
          dir="ltr"
          className="w-56 h-10 absolute top-20 right-[1030px] flex gap-4 text-[#9F9F9F] items-center"
        >
          <span className="font-kalamehNum">{insertDate}</span>
          <span>یکشنبه</span>
          <span className="font-kalamehNum">10:20:30</span>
          <span className="flex flex-row">
            <TiStarFullOutline className="w-5 h-5" />
            <span className="font-kalamehNum">{currentRate}/5</span>
          </span>
          <span className="flex flex-row">
            <HiEye className="w-6 h-6 pr-1" />
            <span className="font-kalamehNum">{currentView}</span>
          </span>
        </div>
      </div>
      <div className="w-11/12 h-80 pr-64 pl-12 pt-10 bg-white rounded-2xl absolute top-32 right-24 ">
        <p className="text-xl h-56 text-charcoal_gray text-justify">
          {describe}
        </p>
        <div dir="ltr" className="w-full flex flex-row gap-5 font-kalamehNum">
          <MdFavoriteBorder className="w-6 h-6 cursor-pointer " />
          <span>{inUsersFavoriteCount}</span>
          <BiDislike className="w-6 h-6 cursor-pointer " />
          <span>{currentDissLikeCount}</span>
          <BiLike className="w-6 h-6 cursor-pointer " />
          <span>{currentLikeCount}</span>
          <MdOutlineComment className="w-6 h-6 " />
          <span>{commentsCount}</span>
        </div>
      </div>
      <div className="w-auto h-10 bg-[#d1d1d1] absolute top-[448px] right-[950px] rounded-b-xl">
        <h1 className="text-[#7b7b7b] text-center p-2 whitespace-nowrap"> نوشته شده توسط: {addUserFullName}</h1>
        <h1></h1>
      </div>
    </div>
  );
};

export { BlogDetailCard };
