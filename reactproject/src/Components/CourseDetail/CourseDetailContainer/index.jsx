import React from "react";
import Accordion from "../../Courses/Accordion";
import { CourseDetailAccordion } from "../CourseDetailAccordion";

const CourseDetailContainer = () => {
  return (
    <div
      dir="rtl"
      className="grid grid-cols-6 gap-5 w-full h-[900px] border mt-10"
    >
      <div className="col-span-4">
        <div className="w-full h-auto rounded-3xl bg-white p-10">
          <div className=" mb-5">
            <h1 className="text-ocean_blue text-2xl font-bold">توضیحات</h1>
          </div>
          <div className="">
            <p className="text-[#8d8d8d] text-justify leading-7 ">
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
        <div className="w-full h-96 bg-white rounded-3xl mt-8">
            
        </div>
      </div>
      <div className="col-span-2">
        <div className="w-full h-72 bg-white mb-5 rounded-2xl">3</div>
        <div className="w-full h-72 bg-white rounded-2xl">4</div>
      </div>
    </div>
  );
};

export { CourseDetailContainer };
