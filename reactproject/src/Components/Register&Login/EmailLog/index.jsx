import React from "react";
import { LogButton } from "../../Common/LogButton";
import { LoginTitle } from "../LoginTitle";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginInputEmail } from "../LoginInputEmail";
import { Form, Formik } from "formik";
import { validationSchema } from "../../../Core/Validation";

const LoginEmail = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    navigate("/login/recievecodelog");
  };
  return (
    <div className="w-[1000px] h-[500px] absolute top-[110px] right-[310px] flex">
      <div className="p-4 w-5/6 h-full"></div>
      <div dir="rtl" className="w-2/3 h-full pr-12 pt-16">
        <LoginTitle
          text="حساب کاربری ندارید؟"
          log="ثبت نام کنید."
          title="ورود با ایمیل"
        />
        <Formik
          initialValues={{ gmail: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form>
              <div className="mt-5">
                <LoginInputEmail />
              </div>
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
          )}
        </Formik>
        <div className="flex flex-row text-xs text-[#8d8d8d] gap-40 pt-1">
          <NavLink to="/login" className="cursor-pointer">
            ورود با موبایل
          </NavLink>
          <NavLink to="/login/forgetpassword" className="cursor-pointer">
            فراموشی رمز
          </NavLink>
        </div>
        <div>
          <h3></h3>
        </div>
      </div>
    </div>
  );
};

export { LoginEmail };
