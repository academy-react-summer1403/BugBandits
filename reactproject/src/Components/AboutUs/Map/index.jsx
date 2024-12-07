import React from "react";
import map from "./../../../assets/images/aboutus/map.svg";

const Map = () => {
  return (
    <div className="flex flex-col items-center mt-40 mb-40">
      <div>
        <h1 className="text-ocean_blue text-2xl font-semibold mb-5">
          یه سر بیا پیشمون
        </h1>
      </div>
      <div className="w-2/3 m-auto mt-5">
        <img src={map} alt="" className="w-full" />
      </div>
      <div>
        <p className="text-ocean_blue mt-2">
          ما در شهرستان ساری بلوار خزر و پژوهشگاه دکتر بحرالعلومی منتظر حضور گرم
          شما دوستان عزیزمون هستیم
        </p>
      </div>
    </div>
  );
};

export { Map };
