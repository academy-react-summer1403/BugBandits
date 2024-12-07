import { Button } from "@material-tailwind/react";
import React from "react";

const WriteSuggestion = () => {
  return (
    <div className="w-full h-72 p-10 ">
      <div className="w-5/6 h-48   rounded-2xl m-auto">
        <textarea
          class="py-3 px-4 block w-full border text-[#8d8d8d] dark:text-white dark:bg-midnight_blue dark:border-white rounded-lg text-lg outline-none"
          rows="5"
          placeholder="نظرخود را بنویسید ... "
        />
        <Button className="font-iranSans mt-5 bg-ocean_blue text-white">
          ارسال نظر
        </Button>
      </div>
    </div>
  );
};

export { WriteSuggestion };
