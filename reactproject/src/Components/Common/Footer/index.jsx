import React from "react";
import { LuInstagram } from "react-icons/lu";
import { PiTelegramLogoLight } from "react-icons/pi";
import { useSelector } from "react-redux";

const Footer = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div
      dir="rtl"
      className={`${darkMode && "dark"} w-5/6 h-80 m-auto flex relative`}
    >
      <div className="w-4/6 h-[63%] flex">
        <div className="w-1/5 h-[63%] mr-10 text-charcoal_gray font-bold text-sm dark:text-cloud_grey">
          <h1 className="text-charcoal_gray font-bold text-xl pb-5 dark:text-cloud_grey">
            لینک های مرتبط
          </h1>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
        </div>
        <div className="w-1/5 h-[63%] mr-10 text-charcoal_gray font-bold text-sm dark:text-cloud_grey">
          <h1 className="text-charcoal_gray font-bold text-xl pb-5 dark:text-cloud_grey">
            لینک های مرتبط
          </h1>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
        </div>
        <div className="w-1/5 h-[63%] mr-10 text-charcoal_gray font-bold text-sm dark:text-cloud_grey">
          <h1 className="text-charcoal_gray font-bold text-xl pb-5 dark:text-cloud_grey">
            لینک های مرتبط
          </h1>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
          <h3 className=" pt-4">لینک های مرتبط</h3>
        </div>
      </div>
      <div className="w-1/3 h-[70%] bg-white dark:bg-midnight_blue rounded-2xl py-6 px-10 ">
        <h1 className="text-charcoal_gray dark:text-white font-bold text-xl mb-6">
          به ما بیپوندید
        </h1>
        <p className="text-[#8d8d8d] dark:text-white text-sm text-justify mb-6">
          در دوره آموزش پیشرفته وردپرس قصد داریم نیروهای حرفه‌ای وردپرس کاری
          آماده کنیم که بتوانند هر سایت وردپرسی با هر چالشی را طراحی کنند.
        </p>
        <span className="w-24 h-6 block text-white bg-ocean_blue text-sm pr-3.5 cursor-pointer">
          ارسال رزومه
        </span>
      </div>
      <div className="flex flex-row gap-1 absolute top-72 right-9 dark:text-white">
        <LuInstagram className="w-6 h-6" />
        <PiTelegramLogoLight className="w-6 h-6" />
      </div>
    </div>
  );
};

export { Footer };
