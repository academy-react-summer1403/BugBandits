import React from "react";
import { NavLink } from "react-router-dom";

const LogButton = ({text}) => {

  return <button className="w-72 h-10 bg-ocean_blue mt-3 rounded-lg text-white">
    <NavLink to="/register/recievecode" className="w-72 h-10 inline-block mt-1">{text}</NavLink>
    </button>;
  
};

export { LogButton };
