import { ErrorMessage, Field, Formik } from "formik";
import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Form, NavLink, useNavigate } from "react-router-dom";
import { validationSchema } from "../../../Core/Validation";
import { LogButton } from "../../Common/LogButton";
import { RegisterTitle } from "../RegisterTitle";
import { LoginTitle } from "../LoginTitle";

const EnterPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    navigate("/");
  };

  return (
    <div dir="rtl" className="w-96 absolute top-[150px] right-[310px] ">
      <div className="pr-12 pt-12 flex flex-col">
        <LoginTitle />
        <Formik
          initialValues="password"
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
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
            <div>
              <LogButton
                text="ادامه"
                onClick={(e) => {
                  e.preventDefault();
                  if (isValid || dirty) {
                    handleSubmit();
                  }
                }}
              />
            </div>
          </Form>
        </Formik>
        <div className="flex flex-row text-xs text-[#8d8d8d] gap-20 pt-1">
          <NavLink to="/login" className="cursor-pointer flex gap-2">
            <NavLink to="/login/emaillogin" className="cursor-pointer">
              ورود با ایمیل /
            </NavLink>
            ورود با موبایل
          </NavLink>

          <NavLink to="/login/forgetpassword" className="cursor-pointer">
            فراموشی رمز
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { EnterPassword };
