import React, { useState } from "react";
import { LoginTitle } from "../LoginTitle";
import { LogButton } from "../../Common/LogButton";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginInputNumber } from "../LoginInputNumber";
import { Form, Formik } from "formik";
import { validation } from "../../../Core/Validation/LoginValidation";
import { Postlogin } from "../../../Core/Services/api/AuthApi/login.api";
import toast from "react-hot-toast";
import { RememberMe } from "./RememberMe";
import { LoginInputEmail } from "../LoginInputEmail";
import { setData } from "../../../Core/Storage/localStorage.storage";

const Login = () => {
  const navigate = useNavigate();
  const [way, setWay] = useState(true);

  const onSubmit = async (values) => {
    const userObj = {
      phoneOrGmail: values.email ? values.email : values.userName,
      password: values.passwordE ? values.passwordE : values.passwordU,
      rememberMe: values.remember ? values.remember : false,
    };

    try {
      const result = await Postlogin(userObj);
      console.log("Login Result:", result);

      if (result.success) {
        setData("login", result.token);
        toast.success("با موفقیت وارد شدید ");
        navigate("/");
      } else {
        toast.error("دوباره امتحان کنید  ");
        console.log("login failed:", result);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login.");
    }
  };

  return (
    <div className="w-[1000px] h-[500px] absolute top-[110px] right-[310px] flex">
      <div className="p-4 w-5/6 h-full"></div>
      <div dir="rtl" className="w-2/3 h-full pr-12 pt-16">
        <LoginTitle
          text="حساب کاربری ندارید؟"
          log="ثبت نام کنید."
          title="ورود با موبایل"
        />
        <Formik
          initialValues={{
            email: "",
            passwordE: "",
            passwordU: "",
            remember: "",
            userName: "",
          }}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          <Form>
            {way ? <LoginInputNumber /> : <LoginInputEmail />}
            <RememberMe />
            <span className="flex gap-1 justify-start">
              ورود با
              <p className="cursor-pointer" onClick={() => setWay(!way)}>
                {way ? "ایمیل" : "موبایل"}
              </p>
              <NavLink
                to="/login/forgetpassword"
                className="mr-40 cursor-pointer"
              >
                فراموشی رمز
              </NavLink>
            </span>
            <LogButton text="ادامه" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { Login };
