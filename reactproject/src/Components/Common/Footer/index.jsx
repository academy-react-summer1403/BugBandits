import React from "react";
import { LuInstagram } from "react-icons/lu";
import { PiTelegramLogoLight } from "react-icons/pi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  const FooterItem = [
    {
      title: "دوره های پرطرفدار",
      link: ["آموزش پایتون", "آموزش جاوااسکریپت", "Html آموزش", "Css آموزش"],
    },
    {
      title: "دسترسی سریع",
      link: ["قوانین و مقررات", "ارسال تیکت", "همه دوره ها"],
    },
    {
      title: "دسترسی سریع",
      link: ["قوانین و مقررات", "ارسال تیکت", "همه دوره ها"],
    },
  ];

  return (
    <div
      dir="rtl"
      className={`${
        darkMode && "dark"
      } w-5/6 h-auto m-auto flex flex-col md:flex-row relative py-10`}
    >
      <div className=" h-[63%] flex w-full md:w-4/6 justify-between">
        {FooterItem.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 mb-6 text-charcoal_gray font-bold mini:text-xs mid:text-sm dark:text-cloud_grey"
          >
            <h1 className="text-charcoal_gray whitespace-nowrap font-bold mini:text-sm mid:text-xl pb-5 dark:text-cloud_grey ">
              {item.title}
            </h1>
            {item.link.map((link, i) => (
              <NavLink
                key={i}
                className="block pt-2 hover:text-ocean_blue transition duration-300 whitespace-nowrap"
              >
                {link}
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      <div className="md:w-1/3 h-[70%] bg-white dark:bg-midnight_blue rounded-2xl py-6 px-10 ">
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
      <div className="md:flex flex-row gap-1 hidden absolute top-72 dark:text-white">
        <LuInstagram className="w-6 h-6" />
        <PiTelegramLogoLight className="w-6 h-6" />
      </div>
    </div>
  );
};

export { Footer };
