import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  PostRegister,
  SendVerifyMessage,
  VerifyMessage,
} from "../../../Core/Services/api/AuthApi/register.api";
import { RegisterTitle } from "../RegisterTitle";
import { Button, Spinner } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

const Register = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  const sendVerificationCode = async (values, actions) => {
    try {
      const response = await SendVerifyMessage({
        phoneNumber: values.phoneNumber,
      });
      setPhoneNumber(values.phoneNumber);
      actions.setSubmitting(false);
      handleNextStep();
    } catch (error) {
      actions.setErrors({ api: "ارسال کد ناموفق بود" });
      actions.setSubmitting(false);
    }
  };

  const verifyCode = async (values, actions) => {
    try {
      await VerifyMessage({ phoneNumber, verifyCode: values.verifyCode });
      actions.setSubmitting(false);
      handleNextStep();
    } catch (error) {
      actions.setErrors({ api: "کد نامعتبر است" });
      actions.setSubmitting(false);
    }
  };

  const submitRegistration = async (values, actions) => {
    try {
      await PostRegister({
        phoneNumber,
        gmail: values.gmail,
        password: values.password,
      });
      actions.setSubmitting(false);
      toast.success("ثبت نام با موفقیت انجام شد");
      navigate("/");
    } catch (error) {
      actions.setErrors({ api: "ثبت نام ناموفق بود" });
      actions.setSubmitting(false);
    }
  };

  return (
    <div
      dir="rtl"
      className="w-96 absolute top-[110px] right-[310px] flex flex-col"
    >
      <Toaster />
      <div className="pr-12 pt-8">
        <RegisterTitle log="وارد شوید." text="حساب کاربری دارید؟" />
      </div>
      {step === 1 && (
        <Formik
          initialValues={{ phoneNumber: "" }}
          onSubmit={sendVerificationCode}
        >
          {({ isSubmitting, errors }) => (
            <Form className="flex flex-col m-10">
              <Field
                name="phoneNumber"
                placeholder="تلفن همراه"
                className="input w-full h-10 bg-soft_grey rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
              />
              {errors.api && <div className="text-red-500">{errors.api}</div>}
              <Button
                type="submit"
                className="btn mt-4 bg-ocean_blue font-iranSans"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Spinner className="m-auto" /> : "ادامه"}
              </Button>
            </Form>
          )}
        </Formik>
      )}

      {step === 2 && (
        <Formik initialValues={{ verifyCode: "" }} onSubmit={verifyCode}>
          {({ isSubmitting, errors }) => (
            <Form className="flex flex-col m-10">
              <Field
                name="verifyCode"
                placeholder="کد"
                className="input w-full h-10 bg-soft_grey rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
              />
              {errors.api && <div className="text-red-500">{errors.api}</div>}
              <Button
                type="submit"
                className="btn mt-4 bg-ocean_blue font-iranSans"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Spinner className="m-auto" /> : "ادامه"}
              </Button>
              <Button
                type="button"
                className="btn mt-2  bg-ocean_blue font-iranSans"
                onClick={handlePreviousStep}
              >
                بازگشت
              </Button>
            </Form>
          )}
        </Formik>
      )}

      {step === 3 && (
        <Formik
          initialValues={{ gmail: "", password: "", phoneNumber }}
          onSubmit={submitRegistration}
        >
          {({ isSubmitting, errors }) => (
            <Form className="flex flex-col m-10">
              <Field
                name="gmail"
                placeholder="ایمیل"
                className="input  w-full h-10 bg-soft_grey rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
              />
              <div className="relative mt-2">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="رمز ورود"
                  className="input w-full h-10 bg-soft_grey rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
                />
                <button
                  type="button"
                  className="absolute left-5 top-3 text-ocean_blue"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoEye className="w-5 h-5" />
                  ) : (
                    <IoEyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
              <Field
                name="phoneNumber"
                placeholder="تلفن همراه"
                className="input mt-2 w-full h-10 bg-soft_grey rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
                disabled
              />
              {errors.api && <div className="text-red-500">{errors.api}</div>}
              <Button
                type="submit"
                className="btn mt-1 bg-ocean_blue font-iranSans"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Spinner className="m-auto" /> : "ثبت نام"}
              </Button>
              <Button
                type="button"
                className="btn mt-1 bg-ocean_blue font-iranSans"
                onClick={handlePreviousStep}
              >
                بازگشت
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export { Register };
