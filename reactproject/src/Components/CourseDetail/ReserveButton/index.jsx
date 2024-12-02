import { Button } from "@material-tailwind/react";
import React from "react";
import { courseReserve } from "../../../Core/Services/api/CourseApi/reservecourse";

const ReserveButton = ({ handleOnclick }) => {
  return (
    <div className="w-full h-12">
      <Button
        onClick={handleOnclick}
        className="w-full h-12 bg-ocean_blue text-white mt-5 rounded-xl font-iranSans text-sm"
      >
        رزرو دوره
      </Button>
    </div>
  );
};

export { ReserveButton };
