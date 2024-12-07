import { Button } from "@material-tailwind/react";
import React from "react";

const LogButton = ({ text, onClick }) => {
  return (
    <Button
      type="submit"
      onClick={onClick}
      className="w-72 h-10 bg-ocean_blue mt-3 rounded-lg text-white text-base font-iranSans"
    >
        {text}
    </Button>
  );
};

export { LogButton };
