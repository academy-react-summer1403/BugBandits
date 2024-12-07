import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { validationSchema } from "../../../Core/Validation";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const ForgetPassInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Formik
      initialValues={{ password: "" }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="رمز جدید"
          className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
        ></Field>
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
        ></ErrorMessage>
      </Form>
    </Formik>
  );
};

export { ForgetPassInput };
