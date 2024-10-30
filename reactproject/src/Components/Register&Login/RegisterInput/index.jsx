import { Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const RegisterInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Field
        name="name"
        placeholder="نام"
        className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
      />
      <ErrorMessage
        name="name"
        component={"div"}
        className="text-red-600 text-xs"
      />
      <Field
        name="number"
        placeholder="شماره تماس"
        className="w-72 h-10 text-right bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
      />
      <ErrorMessage
        name="number"
        component={"div"}
        className="text-red-600 text-xs"
      />
      <Field
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="رمز عبور"
        className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
      />
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
      <ErrorMessage
        name="password"
        component={"div"}
        className="text-red-600 text-xs"
      />
    </>
  );
};

export { RegisterInput };
