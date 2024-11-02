import React from "react";
import { MoreNewsCard } from "../MoreNewsCard";

const MoreNewsSection = () => {
  return (
    <div dir="rtl" className="w-full h-auto mt-20 mb-10">
      <div>
        <h1 className="font-bold text-3xl text-navy_blue">اخبار مشابه</h1>
      </div>
      <div className="flex flex-row gap-9">
        <MoreNewsCard />
        <MoreNewsCard />
        <MoreNewsCard />
        <MoreNewsCard />
      </div>
    </div>
  );
};

export { MoreNewsSection };
