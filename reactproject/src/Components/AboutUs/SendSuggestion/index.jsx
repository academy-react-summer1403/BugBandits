import React from "react";
import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const SendSuggestion = () => {
  const darkMode = useSelector((state) => state.darkMode.value);

  return (
    <div className={`${darkMode ? "dark" : ""} flex flex-col items-center `}>
      <div>
        <h1 className="text-ocean_blue text-2xl font-semibold mb-5">
          انتقادها و پیشنهادات
        </h1>
      </div>
      <div className="w-[550px] h-80 bg-white dark:bg-midnight_blue rounded-3xl flex flex-col items-center">
        <input
          dir="rtl"
          type="email"
          className="w-11/12 h-12 py-3 px-4 border dark:text-white dark:bg-midnight_blue border-dark_gray rounded-xl outline-none relative top-8 right-20"
          placeholder="ایمیل"
        />
        <textarea
          dir="rtl"
          class="py-3 px-4 block w-11/12 h-44 border dark:text-white dark:bg-midnight_blue border-dark_gray rounded-xl outline-none text-sm relative top-12 left-20"
          rows="3"
          placeholder="متن پیام"
        />
        <Button className="z-50 relative top-20 font-iranSans bg-ocean_blue">
          ارسال
        </Button>
      </div>
    </div>
  );
};

export { SendSuggestion };
