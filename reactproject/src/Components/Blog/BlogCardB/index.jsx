import React from "react";
import bg from "./../../../assets/images/blog/bloglist.svg";

const BlogCardB = ({ handleNavigation }) => {
  return (
    <div className=" w-full h-full border-x-4 border-dark_gray">
      <div className="w-64 m-auto mb-5 ">
        <h1
          onClick={handleNavigation}
          className="font-bold text-xl cursor-pointer hover:text-ocean_blue"
        >
          سرتیتر خبر
        </h1>
        <p className="text-sm text-justify">
          سلام این متن تست برای قسمت وبلاگ اکادمی سپهر و اوسکولم هودتی چرا؟چون
          ایکس دی لورم رو ساپورت نمیکنه و از طرفیم دوس دارم تم ک تایپم مشکل داره
        </p>
      </div>
      <div className="w-64 m-auto cursor-pointer">
        <img
          onClick={handleNavigation}
          src={bg}
          className="hover:scale-105 transition-all duration-300 hover:brightness-75"
        />
      </div>
    </div>
  );
};

export { BlogCardB };
