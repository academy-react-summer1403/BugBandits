import { Button } from "@material-tailwind/react";
import React from "react";

const ReserveButton = () => {
  return (
    <div className="w-full h-12">
      <Button className="w-full h-12 bg-ocean_blue text-white mt-5 rounded-xl font-iranSans text-sm">
        رزرو دوره
      </Button>
    </div>
  );
};

export { ReserveButton };
