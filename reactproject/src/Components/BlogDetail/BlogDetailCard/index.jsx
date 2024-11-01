import React from "react";
import bg from "./../../../assets/images/blog/bloglist.svg";
import { TiStarFullOutline } from "react-icons/ti";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";

const BlogDetailCard = () => {
  return (
    <div dir="rtl" className="w-full h-[500px] flex justify-between relative">
      <div className="flex flex-row mt-10">
        <div className="w-80 h-80 rounded-2xl z-50">
          <img src={bg} alt="not found" className="rounded-2xl" />
        </div>
        <div className="w-80 h-80 bg-[#9F9F9F] rotate-12 rounded-2xl absolute -right-7" />
        <div className="m-7">
          <h1 className="font-bold text-3xl text-charcoal_gray">سرتیتر خبر</h1>
        </div>
        <div
          dir="ltr"
          className="w-56 h-10 absolute top-20 right-[1030px] flex gap-4 text-[#9F9F9F] items-center"
        >
          <span>1396/5/10</span>
          <span>یکشنبه</span>
          <span>10:20:30</span>
          <span className="flex flex-row">
            <TiStarFullOutline className="w-5 h-5" />
            <span>4.2/5</span>
          </span>
        </div>
      </div>
      <div className="w-11/12 h-80 pr-64 pl-12 pt-10 bg-white rounded-2xl absolute top-32 right-24 -z-20">
        <p className="text-xl text-charcoal_gray text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <div dir="ltr" className="w-full flex flex-row gap-5">
          <MdFavoriteBorder className="w-6 h-6 " />
          <BiDislike className="w-6 h-6 " />
          <BiLike className="w-6 h-6 " />
        </div>
      </div>
      <div className="w-40 h-10 bg-[#d1d1d1] absolute top-[448px] right-[1000px] rounded-b-xl">
        <h1 className="text-[#7b7b7b] text-center p-2">نوشته شده توسط:</h1>
      </div>
    </div>
  );
};

export { BlogDetailCard };
