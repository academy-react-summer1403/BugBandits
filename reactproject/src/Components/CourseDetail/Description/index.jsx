import React from "react";

const Description = ({ describe }) => {
  return (
    <div className="w-full h-auto rounded-3xl bg-white dark:bg-midnight_blue p-10">
      <div className=" mb-5">
        <h1 className="text-ocean_blue text-2xl font-bold">توضیحات</h1>
      </div>
      <div className="">
        <p className="text-[#8d8d8d] text-justify leading-7 dark:text-white ">
          {describe}
        </p>
      </div>
    </div>
  );
};

export { Description };
