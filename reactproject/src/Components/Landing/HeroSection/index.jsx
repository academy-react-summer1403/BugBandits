import React, { Fragment } from "react";
import HeroSectionimg01 from "./../../../assets/images/herosection01.svg";
import HeroSectionimg02 from "./../../../assets/images/herosection02.svg";
import bgdesign from "./../../../assets/images/bgdesign.svg";

const HeroSection = () => {
  return (
    <Fragment>
      <img src={bgdesign} className="w-[900px] h-[900px] absolute top-1 right-0 -z-10" />
      <div className="border w-11/12 h-[600px] m-auto mt-40 flex relative ">
        <div>
          <img src={HeroSectionimg01} alt="not found" />
          <img
            src={HeroSectionimg02}
            alt="not found"
            className="absolute bottom-[400px] left-12 "
          />
          <h1></h1>
        </div>
        <div dir="rtl">
          <div className="border ">
            <h1 className="text-ocean_blue text-4xl font-bold mb-3">
              دنبال چی می گردی؟
            </h1>
            <h4 className="text-medium_gray text-l">
              دیگه وقتشه یه تکونی به خودت بدی ...{" "}
            </h4>
          </div>

          <div className="border">
            <input className="w-72 h-8 border border-ocean_blue rounded-lg" />
            <button></button>
          </div>

          <div className="border">
            <h2>آکادمی سپهر</h2>
            <h5>
              آکاپمی آموزشی سپهر مکانی برای پیشرفت تو تا بتونی مهارت های مورد
              نیزار برای طراحی وب رو هرچه سریعتر و با بهترین روش یاد بگیری
            </h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
