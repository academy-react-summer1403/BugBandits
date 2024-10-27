import React from "react";

const TeacherDetailHeader = ({
  fullName,
  courseCounts,
  newsCount,
  pictureAddress,
}) => {
  return (
    <div className="w-full h-auto mt-16 bg-white dark:bg-midnight_blue rounded-xl flex flex-row">
      <div className="w-2/3 p-10">
        <div>
          <h1 className="text-2xl font-bold text-ocean_blue mb-2 dark:text-white">
            {fullName}
          </h1>
          <p className="text-lg text-dusty_blue text-justify dark:text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
          </p>
        </div>
        <div className="flex flex-row gap-20 text-xl text-dusty_blue dark:text-white pt-5 justify-center">
          <div className="flex flex-col items-center">
            <h1>دوره فعال</h1>
            <h1 className="font-kalamehNum">{courseCounts}</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1>دوره تکمیل شده</h1>
            <h1 className="font-kalamehNum">{newsCount}</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1>امتیاز</h1>
            <h1 className="font-kalamehNum">5/5</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1>دوره فعال</h1>
            <h1 className="font-kalamehNum">{newsCount}</h1>
          </div>
        </div>
      </div>
      <div className="w-96 h-96 relative right-4 bottom-10 ">
        <img
          src={pictureAddress}
          className="w-96 h-80 bg-ocean_blue rounded-2xl"
        />
      </div>
    </div>
  );
};

export { TeacherDetailHeader };
