import React from "react";
import { NavBarDetail } from "../NavBarDetail";
import { FilterNavBar } from "../FilterNavBar";
import { CourseList } from "../../Courses/CourseList";
import { Card } from "../../CourseCard";

const TeacherDetail = () => {
  return (
    <div dir="rtl" className="w-5/6 h-auto mt-5 m-auto">
      <div className="w-full h-auto rounded-xl bg-white">
        <NavBarDetail text="درباره استاد" />
      </div>
      <div className="w-full h-auto mt-16 bg-white rounded-xl flex flex-row">
        <div className="w-2/3 p-10">
          <div>
            <h1 className="text-2xl font-bold text-ocean_blue mb-2">صبا اسلامی</h1>
            <p className="text-lg text-dusty_blue text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد.
            </p>
          </div>
          <div className="flex flex-row gap-20 text-xl text-dusty_blue pt-5 justify-center">
            <div className="flex flex-col items-center">
              <h1>دوره فعال</h1>
              <h1>10</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1>دوره تکمیل شده</h1>
              <h1>10</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1>امتیاز</h1>
              <h1>10</h1>
            </div>
            <div className="flex flex-col items-center">
              <h1>دوره فعال</h1>
              <h1>10</h1>
            </div>
          </div>
        </div>
        <div className="w-96 h-96 relative right-4 bottom-10 ">
          <img src="" alt="" className="w-96 h-80 bg-ocean_blue rounded-2xl" />
        </div>
      </div>
      <div className="mt-7">
        <FilterNavBar/>
      </div>
      <div className="flex flex-row gap-10 mt-20">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export { TeacherDetail };
