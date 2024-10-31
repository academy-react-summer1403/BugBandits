import React from "react";
import { FilterNavBar } from "../../Teachers/FilterNavBar";
import { FirstRow } from "../BlogFirstRow";
import { BlogSecondRow } from "../BlogSecondRow";

const BlogHolder = () => {
  return (
    <div dir="rtl" className="w-5/6 m-auto mt-10">
      <div>
        <FilterNavBar />
      </div>
      <div className="mt-2 mb-10">
        <div class="flex justify-between items-center">
          <span class="text-lg text-[#8d8d8d]">خبرنامه سپهر</span>
          <span class="text-lg text-[#8d8d8d]">پنجشنبه ۱۹ تیر</span>
        </div>
        <div class="flex items-center justify-center">
          <div class="flex-grow border-t-4 border-charcoal_gray"></div>
          <span class="mx-4 text-3xl font-bold charcoal_gray">
            روزنامه سپهر
          </span>
          <div class="flex-grow border-t-4 border-charcoal_gray"></div>
        </div>
      </div>

      <div className="w-full h-auto bg-white mt-5 rounded-md flex flex-col">
        <div className="m-7 ">
          <FirstRow />
          <BlogSecondRow />
          <FirstRow />
        </div>
      </div>
    </div>
  );
};

export { BlogHolder };
