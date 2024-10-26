import React from "react";
import Accordion from "../../Courses/Accordion";
import { CourseDetailAccordion } from "../CourseDetailAccordion";
import { useSelector } from "react-redux";
import { IoIosMore } from "react-icons/io";

const CourseDetailContainer = () => {
  const darkMode = useSelector((state) => state.darkMode.value);
  
  return (
    <div
      dir="rtl"
      className={`${
        darkMode ? "dark" : ""
      } grid grid-cols-6 gap-5 w-full h-auto mt-10`}
    >
      <div className="col-span-4">
        <div className="w-full h-auto rounded-3xl bg-white dark:bg-midnight_blue p-10">
          <div className=" mb-5">
            <h1 className="text-ocean_blue text-2xl font-bold">توضیحات</h1>
          </div>
          <div className="">
            <p className="text-[#8d8d8d] text-justify leading-7 dark:text-white ">
              یکی از اصلی‌ترین شاخص‌های یک اپلیکیشن مدرن، استفاده آن از تکنولوژی
              REST API است. با استفاده از چنین تکنولوژی شما قابلیت ایجاد یک پل
              ارتباطی میان Back-End و Front-End را پیدا خواهید کرد و مستقل از
              اینکه از چه تکنولوژی‌هایی در هر دو سمت استفاده می‌کنید، می‌توانید
              محتوا بک-اند را به فرانت-اند ارسال کنید.در واقع با ظهور چنین
              تکنولوژی بود که معماری بسیاری از اپلیکیشن‌ها تغییر کرد و رویکرد
              تازه‌ای در فرایند توسعه اپلیکیشن ایجاد شد. اما برای اینکه چنین
              قابلیتی را پیاده‌سازی کنیم، نیاز است که از ابزارهای درست استفاده
              کنیم.لاراول یکی از آن ابزارهای درست است! در واقع لاراول بیشتر
              تمرکز خود را روی توسعه هر چه بهتر APIها گذاشته و ویژگی‌های
              بی‌شماری را در این زمینه توسعه داده است. اگر که پیشتر با لاراول
              کار کرده و دوره‌های مقدماتی را طی کرده‌اید، باید بگویم که شانس در
              خانه شما را زده، چرا که امروز می‌توانید با شرکت در این دوره
              آموزشی، به صورت کامل با تمام ویژگی‌های لاراول در زمینه توسعه API
              آشنا شوید.
            </p>
          </div>
        </div>
        <div>
          <CourseDetailAccordion />
        </div>
        <div className="w-full h-96 bg-white dark:bg-midnight_blue rounded-3xl mt-8 p-10">
          <div className=" mb-5">
            <h1 className="text-ocean_blue text-2xl font-bold">نظرات</h1>
          </div>
          <div className="w-5/6 h-48   rounded-2xl m-auto">
            {/* <input
              placeholder="نظرخود را بنویسید ... "
              className=" w-full h-full pb-32 pr-3 rounded-2xl outline-none  "
            /> */}
            <textarea
              class="py-3 px-4 block w-full border border-dark_gray text-[#8d8d8d] dark:text-white dark:bg-midnight_blue dark:border-white rounded-lg text-lg outline-none"
              rows="5"
              placeholder="نظرخود را بنویسید ... "
            ></textarea>

            <div className="w-28 h-10 mt-5 rounded-lg bg-ocean_blue justify-center text-white font-bold cursor-pointer">
              <h1 className="relative top-2 right-6">ارسال نظر</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="w-full h-72 bg-white dark:bg-midnight_blue mb-5 rounded-2xl px-6">
          <div className="w-full h-24 flex flex-row border-b-2 pt-5">
            <div className="w-14 h-14 bg-black rounded-full">
              {/* <img /> */}
            </div>
            <div className="pr-4 pt-1">
              <h1 className="text-ocean_blue text-xl font-bold">آقای ایکس</h1>
              <h3 className="text-xs text-cool_blue dark:text-white">
                مدرس دوره
              </h3>
            </div>
          </div>
          <div className="w-full h-32 pt-3 border-b-2">
            <p className="text-[#8d8d8d] text-sm text-justify dark:text-white">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و
            </p>
          </div>
          <div className="w-full h-10 flex flex-row justify-center pt-5">
            <IoIosMore className="text-ocean_blue cursor-pointer" />
            <span className="text-ocean_blue text-xs pr-2 cursor-pointer">
              مشاهده سایر آموزش های این استاد
            </span>
          </div>
        </div>
        <div className="w-full h-auto bg-white dark:bg-midnight_blue rounded-2xl">
          <div className="flex flex-row p-6 gap-48">
            <div className=" text-ocean_blue font-bold">
              <h1>هزینه</h1>
              <h1>سطح دوره </h1>
              <h1>وضعیت دوره </h1>
              <h1>مدت زمان</h1>
              <h1>امتیاز</h1>
              <h1>شروع دوره</h1>
              <h1>پایان دوره</h1>
            </div>
            <div className="text-left text-cool_blue dark:text-[#acacac]">
              <h1>هزینه</h1>
              <h1>سطح دوره </h1>
              <h1>وضعیت دوره </h1>
              <h1>مدت زمان</h1>
              <h1>امتیاز</h1>
              <h1>شروع دوره</h1>
              <h1>پایان دوره</h1>
            </div>
          </div>
        </div>
        <div className="w-full h-12">
          <button className="w-full h-12 bg-ocean_blue text-white mt-5 rounded-2xl">
            رزرو دوره
          </button>
        </div>
      </div>
    </div>
  );
};

export { CourseDetailContainer };
