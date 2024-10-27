import React from "react";
import { IoHeart } from "react-icons/io5";
import { LuReplyAll } from "react-icons/lu";

const Comments = () => {
  return (
    <div className="w-2/3 h-auto mt-10">
      <div className="flex flex-col w-auto h-auto bg-soft_grey dark:bg-[#353c4b] border rounded-xl">
        <div className="flex flex-row">
          <img
            src=""
            alt=""
            className="w-20 h-20 border rounded-xl bg-white relative bottom-6 right-5"
          />
          <div className="flex flex-row pt-4 gap-5 mr-10 text-ocean_blue font-semibold dark:text-white">
            <h1 className="font-iranSans">صبا اسلامی</h1>
            <h1 className="font-kalamehNum">12/5/403</h1>
            <h1 className="font-kalamehNum">8:05</h1>
          </div>
        </div>
        <div className="mr-10 dark:text-white">comment section</div>
        <div
          dir="ltr"
          className="text-ocean_blue flex flex-row gap-2 p-3 dark:text-white"
        >
          <LuReplyAll className="w-5 h-5" />
          <IoHeart className="w-5 h-5" />
          <span className="font-kalamehNum">52</span>
        </div>
      </div>
    </div>
  );
};

export { Comments };
