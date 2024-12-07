import React from "react";
import { SendSuggestion } from "../SendSuggestion";
import { Map } from "../Map";

const AboutUsHolder = () => {
  return (
    <div className="w-11/12 h-auto m-auto mt-20">
      <div>
        <SendSuggestion />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
};

export { AboutUsHolder };
