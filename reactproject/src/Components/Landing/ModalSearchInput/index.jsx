import React from "react";

const ModalSearchInput = ({ value, onChange }) => {
  return (
    <div>
      <input
        className="w-full  font-iranSans outline-none border-b-2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export { ModalSearchInput };
