import React from "react";
import bg from "./../../../assets/images/blog/blogtitr.svg";

const BlogSecondRow = ({ handleNavigation }) => {
  return (
    <div
      onClick={handleNavigation}
      className="group my-8 border-x-4 border-dark_gray overflow-hidden relative cursor-pointer"
    >
      {/* <div className="w-full h-[400px] absolute border top-0 z-50 bg-gradient-to-r from-transparent to-white opacity-40 transform -skew-x-12 -inset-full group-hover:animate-shine" /> */}
      <img
        src={bg}
        className="w-full h-[400px] px-3 scale-y-110 filter brightness-50"
      />
      <div className="w-5/6 m-auto absolute top-36 right-24">
        <h1 className="text-center font-iranSansBold text-3xl text-white">
          سرتیتر خبر
        </h1>
        <p className="text-center mt-8 text-lg text-white">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
      </div>
    </div>
  );
};

export { BlogSecondRow };
