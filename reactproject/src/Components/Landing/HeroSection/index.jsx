import React from "react";
import HeroSectionimg01 from "./../../../assets/images/landing/herosection01.svg";
import HeroSectionimg03 from "./../../../assets/images/landing/herosection03.svg";
import bgdesign from "./../../../assets/images/landing/bgdesign.svg";
import { LuSearch } from "react-icons/lu";
import { useSelector } from "react-redux";
import { TextTypingEffect } from "../TextEffect";

const HeroSection = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <img
        src={bgdesign}
        className="xl:w-[900px] xl:h-[900px] absolute top-1 right-0 -z-10 dark:opacity-15 md:w-[700px] md:h-[700px] sm:w-[500px] sm:h-[500px]"
        alt="Background Design"
      />

      <div className="w-11/12 max-w-7xl h-auto m-auto mt-20 flex flex-col lg:flex-row relative">
        <div className="flex flex-col items-center md:items-start md:w-11/12">
          <img
            src={HeroSectionimg01}
            alt="Hero Image"
            className="w-full md:w-11/12 relative"
          />
          <img
            src={HeroSectionimg03}
            alt="Overlay Image"
            className="absolute top-20 left-3 max-w-40 md:w-auto "
          />
        </div>
        <div dir="rtl" className=" flex flex-col">
          <div className="pt-12 md:pt-24">
            <TextTypingEffect />
            <h4 className="text-medium_gray text-sm md:text-base dark:text-white">
              دیگه وقتشه یه تکونی به خودت بدی ...
            </h4>
          </div>

          <div className="pt-1 flex items-center">
            <input
              className="w-full md:w-96 h-12 border pr-5 pl-12 border-ocean_blue rounded-2xl placeholder:text-light_gray placeholder:text-sm outline-none text-dark_gray"
              placeholder="تو فقط اسم ببر ..."
            />
            <button className="relative top-0.5 left-2">
              <LuSearch className="w-9 h-9 text-white bg-ocean_blue rounded-xl border-4 border-ocean_blue absolute left-0 -top-5" />
            </button>
          </div>

          <div className="mt-7">
            <h2 className="text-3xl md:text-4xl text-charcoal_gray dark:text-orange">
              آکادمی سپهر
            </h2>
            <h5 className="text-sm md:text-base text-medium_gray pt-3 dark:text-white">
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
