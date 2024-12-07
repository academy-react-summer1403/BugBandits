import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const LoginEmail = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div>
      <Field
        name="email"
        placeholder="ایمیل"
        className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
      />
      <ErrorMessage
        name="email"
        component={"div"}
        className="text-red-600 text-xs"
      />
      <Field
        name="passwordE"
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
        name="passwordE"
        component={"div"}
        className="text-red-600 text-xs"
      />
    </div>
  );
};

export { LoginEmail };
