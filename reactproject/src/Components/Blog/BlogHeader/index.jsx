import React from "react";

const BlogHeader = () => {
  return (
    <div className="mt-2 mb-10">
      <div class="flex justify-between items-center">
        <span class="text-lg text-[#8d8d8d]">خبرنامه سپهر</span>
        <span class="text-lg text-[#8d8d8d]">پنجشنبه ۱۹ تیر</span>
      </div>
      <div class="flex items-center justify-center">
        <div class="flex-grow border-t-4 border-charcoal_gray"></div>
        <span class="mx-4 text-3xl font-bold charcoal_gray">روزنامه سپهر</span>
        <div class="flex-grow border-t-4 border-charcoal_gray"></div>
      </div>
    </div>
  );
};

export { BlogHeader };
