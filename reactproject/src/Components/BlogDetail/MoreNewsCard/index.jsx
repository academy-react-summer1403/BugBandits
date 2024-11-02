import React from "react";
import bg from "./../../../assets/images/blog/bloglist.svg";

const MoreNewsCard = () => {
  return (
    <div>
      <div className="w-72 h-96 rounded-3xl bg-white mt-20 px-5 pb-5">
        <div className="w-56rounded-3xl relative bottom-7">
          <img src={bg} alt="not found" className="rounded-3xl m-auto " />
        </div>
        <div className="">
          <h1 className="text-xl text-charcoal_gray">سرتیتر خبر</h1>
          <p className="text-sm text-justify text-[#8D8D8D] ">
            سلام این یک متن نمونه است و کلی کار هنوز مونده ک
          </p>
        </div>
      </div>
    </div>
  );
};

export { MoreNewsCard };
