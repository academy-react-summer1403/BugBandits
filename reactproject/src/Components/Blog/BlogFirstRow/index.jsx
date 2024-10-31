import React from "react";
import bg from "./../../../assets/images/blog/bloglist.svg";

const FirstRow = () => {
  return (
    <div className=" w-full h-[400px] flex flex-row ">
      <div className=" w-full h-full border-l-4 border-r-4 border-dark_gray">
        <div className="w-64 m-auto cursor-pointer">
          <img
            src={bg}
            className="hover:scale-105 hover:brightness-75 transition-all duration-300"
          />
        </div>
        <div className="w-64 m-auto mt-5">
          <h1 className="font-bold text-xl cursor-pointer hover:text-ocean_blue">
            سرتیتر خبر
          </h1>
          <p className="text-sm text-justify">
            سلام این متن تست برای قسمت وبلاگ اکادمی سپهر و اوسکولم هودتی چرا؟چون
            ایکس دی لورم رو ساپورت نمیکنه و از طرفیم دوس دارم تم ک تایپم مشکل
            داره
          </p>
        </div>
      </div>
      <div className=" w-full h-full border-l-4 border-dark_gray">
        <div className="w-64 m-auto mb-5 ">
          <h1 className="font-bold text-xl cursor-pointer hover:text-ocean_blue">
            سرتیتر خبر
          </h1>
          <p className="text-sm text-justify">
            سلام این متن تست برای قسمت وبلاگ اکادمی سپهر و اوسکولم هودتی چرا؟چون
            ایکس دی لورم رو ساپورت نمیکنه و از طرفیم دوس دارم تم ک تایپم مشکل
            داره
          </p>
        </div>
        <div className="w-64 m-auto cursor-pointer">
          <img
            src={bg}
            className="hover:scale-105 transition-all duration-300 hover:brightness-75"
          />
        </div>
      </div>
      <div className=" w-full h-full border-l-4 border-dark_gray">
        <div className="w-64 m-auto">
          <img src={bg} />
        </div>
        <div className="w-64 m-auto mt-5">
          <h1 className="font-bold text-xl">سرتیتر خبر</h1>
          <p className="text-sm text-justify">
            سلام این متن تست برای قسمت وبلاگ اکادمی سپهر و اوسکولم هودتی چرا؟چون
            ایکس دی لورم رو ساپورت نمیکنه و از طرفیم دوس دارم تم ک تایپم مشکل
            داره
          </p>
        </div>
      </div>
      <div className=" w-full h-full border-l-4 border-dark_gray">
        <div className="w-64 m-auto mb-5 ">
          <h1 className="font-bold text-xl">سرتیتر خبر</h1>
          <p className="text-sm text-justify">
            سلام این متن تست برای قسمت وبلاگ اکادمی سپهر و اوسکولم هودتی چرا؟چون
            ایکس دی لورم رو ساپورت نمیکنه و از طرفیم دوس دارم تم ک تایپم مشکل
            داره
          </p>
        </div>
        <div className="w-64 m-auto">
          <img src={bg} />
        </div>
      </div>
    </div>
  );
};

export { FirstRow };
