import React from "react";
import bg from "./../../assets/images/coursedetail/herosectionbg.svg";
import courseimg from "./../../assets/images/coursedetail/courseimg.svg";
import Accordion from "../Courses/Accordion";

const CourseDetail = () => {
  return (
    <div className="w-5/6 h-[2000px] flex flex-col m-auto mt-20">
      <div
        className="grid grid-rows-3 grid-flow-col rounded-xl w-full h-72 bg-cover bg-center relative bg-black bg-opacity-70 shadow-lg"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl backdrop-blur-sm shadow-lg bg-gradient-to-bl from-black/70 to-transparent"></div>
        <div class="row-span-3 w-96 justify-center z-50">
          <img
            src={courseimg}
            alt="not found"
            className="w-96 h-96 absolute -top-12 -left-6"
          />
        </div>
        <div dir="rtl" class="col-span-2 w-full h-44 p-14 z-50">
          <h1 className="text-white font-bold text-3xl whitespace-nowrap">
            آموزش کاربردی RestFul API در لاراول
          </h1>
          <p className="text-[#acacac] w-[460px] text-right mt-3">
            در دوره آموزشی RESTful API در لاراول شیوه پیاده‌سازی REST API در
            پروژه‌های لاراولی را به صورت عملی و کاربردی (براساس نیاز بازار کار)
            یاد خواهید گرفت.
          </p>
        </div>
        <div
          dir="rtl"
          class="row-span-2 col-span-2 w-full h-20 mt-32 pr-14 z-50"
        >
          <div className="flex flex-row gap-60">
            <div className="w-32 h-12 rounded-lg bg-ocean_blue justify-center text-white font-bold cursor-pointer">
              <h1 className="relative top-2 right-6">خرید دوره</h1>
            </div>
            <div className="text-white">
              <h1 className="font-bold">454545 تومان</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        dir="rtl"
        className="grid grid-cols-6 gap-5 w-full h-[900px] border mt-10"
      >
        <div className="col-span-4">
          <div className="w-full h-[600px] rounded-3xl bg-white p-10">
            <div className=" mb-5">
              <h1 className="text-ocean_blue text-2xl font-bold">توضیحات</h1>
            </div>
            <div className="">
              <p className="text-[#8d8d8d] text-justify leading-7 font-bold">
                یکی از اصلی‌ترین شاخص‌های یک اپلیکیشن مدرن، استفاده آن از
                تکنولوژی REST API است. با استفاده از چنین تکنولوژی شما قابلیت
                ایجاد یک پل ارتباطی میان Back-End و Front-End را پیدا خواهید کرد
                و مستقل از اینکه از چه تکنولوژی‌هایی در هر دو سمت استفاده
                می‌کنید، می‌توانید محتوا بک-اند را به فرانت-اند ارسال کنید.در
                واقع با ظهور چنین تکنولوژی بود که معماری بسیاری از اپلیکیشن‌ها
                تغییر کرد و رویکرد تازه‌ای در فرایند توسعه اپلیکیشن ایجاد شد.
                اما برای اینکه چنین قابلیتی را پیاده‌سازی کنیم، نیاز است که از
                ابزارهای درست استفاده کنیم.لاراول یکی از آن ابزارهای درست است!
                در واقع لاراول بیشتر تمرکز خود را روی توسعه هر چه بهتر APIها
                گذاشته و ویژگی‌های بی‌شماری را در این زمینه توسعه داده است. اگر
                که پیشتر با لاراول کار کرده و دوره‌های مقدماتی را طی کرده‌اید،
                باید بگویم که شانس در خانه شما را زده، چرا که امروز می‌توانید با
                شرکت در این دوره آموزشی، به صورت کامل با تمام ویژگی‌های لاراول
                در زمینه توسعه API آشنا شوید.
              </p>
            </div>
            <div>
                <Accordion style={{width:"600px"}}/>
            </div>
          </div>
          <div className="w-full h-96 bg-white rounded-3xl mt-8">6</div>
        </div>
        <div className="col-span-2">
          <div className="w-full h-72 bg-white mb-5 rounded-2xl">3</div>
          <div className="w-full h-72 bg-white rounded-2xl">4</div>
        </div>
      </div>
    </div>
  );
};

export { CourseDetail };
