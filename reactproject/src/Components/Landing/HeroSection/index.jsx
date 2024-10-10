import React, { Fragment } from "react";
import HeroSectionimg01 from "./../../../assets/images/landing/herosection01.svg";
import HeroSectionimg03 from "./../../../assets/images/landing/herosection03.svg";
import bgdesign from "./../../../assets/images/landing/bgdesign.svg";
import { LuSearch } from "react-icons/lu";
import { useState } from "react";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className={`${darkMode && "dark"}`}>
      <img
        src={bgdesign}
        className="w-[900px] h-[900px] absolute top-1 right-0 -z-10 dark:opacity-15"
      />
      <div className="w-11/12 h-[600px] m-auto mt-20 flex relative">
        <div>
          <img src={HeroSectionimg01} alt="not found" className="w-11/12" />
          <img
            src={HeroSectionimg03}
            alt="not found"
            className="absolute top-20 left-3 "
          />
          <h1></h1>
        </div>
        <div dir="rtl">
          <div className="pt-24">
            <h1 className="text-ocean_blue text-4xl font-bold mb-3 dark:text-light_blue">
              دنبال چی می گردی؟
            </h1>
            <h4 className="text-medium_gray text-l dark:text-white">
              دیگه وقتشه یه تکونی به خودت بدی ...
            </h4>
          </div>

          <div className="pt-1">
            <input
              className="w-96 h-12 border pr-5 pl-12 border-ocean_blue rounded-2xl placeholder:text-light_gray placeholder:text-sm outline-none text-dark_gray"
              placeholder="تو فقط اسم ببر ... "
            />
            <button className=" relative top-[0.7rem] left-[2.86rem]">
              <LuSearch className="w-9 h-9 text-white bg-ocean_blue rounded-xl border-4 border-ocean_blue" />
            </button>
          </div>

          <div>
            <h2 className="text-4xl text-charcoal_gray mt-7 dark:text-orange">
              آکادمی سپهر
            </h2>
            <h5 className="text-base text-medium_gray pt-3 dark:text-white">
              آکادمی آموزشی سپهر مکانی برای پیشرفت <br />
              تو تا بتونی مهارت های مورد نیاز برای طراحی وب رو <br />
              هرچه سریعتر و با بهترین روش یاد بگیری
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
