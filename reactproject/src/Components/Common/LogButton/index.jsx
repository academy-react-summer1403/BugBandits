import React from "react";
import { NavLink } from "react-router-dom";

const LogButton = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-72 h-10 bg-ocean_blue mt-3 rounded-lg text-white"
    >
      <span className="w-72 h-10 inline-block mt-1">{text}</span>
    </button>
  );
};

export { LogButton };
