import React, { Fragment } from "react";
import { HeroSection } from "../HeroSection";
import { NewsSlider } from "../NewsSlider";
import { Category } from "../Category";
import { ServiceSlider } from "../ServiceSlider";
import { Category02 } from "../Category02";
import { InformationSection } from "../InformationSection";

const LandingHolder = () => {
  return (
    <div className=" w-auto h-full overflow-hidden">
      <HeroSection />
      <Category />
      <NewsSlider />
      <Category02 />
      <ServiceSlider />
      <InformationSection />
    </div>
  );
};

export { LandingHolder };
