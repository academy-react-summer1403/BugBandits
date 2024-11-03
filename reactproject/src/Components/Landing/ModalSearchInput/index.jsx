import { Input } from "@mui/material";
import React from "react";

const ModalSearchInput = ({ value, onChange, onKeyUp }) => {
  return (
    <div className="">
      <Input
        className="w-full relative bottom-2"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder="..."
      />
    </div>
  );
};

export { ModalSearchInput };
