import { Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const FieldBox = ({ type = "text", name, label, id = label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Field
        name={name}
        className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
        id={id}
        type={inputType}
        placeholder={placeholder}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="relative left-7 top-1 text-ocean_blue"
        >
          {showPassword ? (
            <IoEye className="w-4 h-4" />
          ) : (
            <IoEyeOff className="w-4 h-4" />
          )}
        </button>
      )}
      <ErrorMessage
        name={name}
        component={"p"}
        className="text-red-600 text-xs"
      />
    </div>
  );
};

export { FieldBox };
