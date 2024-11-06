import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const LoginInputNumber = ({
  phoneOrGmail,
  setPhoneOrGmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div>
      <Field
        name="phoneOrGmail"
        placeholder="شماره موبایل"
        className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
      ></Field>
      <ErrorMessage
        name="phoneOrGmail"
        component={"div"}
        className="text-red-600 text-xs"
      ></ErrorMessage>
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
      <label>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        به خاطر بسپار
      </label>
    </div>
  );
};

export { LoginInputNumber };
