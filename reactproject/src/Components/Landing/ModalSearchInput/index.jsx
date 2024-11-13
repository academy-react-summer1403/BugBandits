import { Input } from "@mui/material";
import React from "react";

const ModalSearchInput = ({ value, onChange }) => {
  return (
    <div>
      <Input
        className="w-full relative bottom-2 font-iranSans"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export { ModalSearchInput };
