// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { LogButton } from "../../Common/LogButton";
// import { RegisterTitle } from "../RegisterTitle";
// import { RegisterInput } from "../RegisterInput";
// import { Formik, Form } from "formik";
// import { validationSchema } from "../../../Core/Validation";

// const Register = () => {
//   const navigate = useNavigate();

//   const initialValues = { name: "", password: "", number: "" };

//   const handleSubmit = (values) => {
//     navigate("/register/recievecode");
//   };

//   return (
//     <div dir="rtl" className="w-96 absolute top-[110px] right-[310px] flex">
//       <div className="pr-12 pt-12">
//         <RegisterTitle log="وارد شوید." text="حساب کاربری دارید؟" />
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isValid, dirty }) => (
//             <Form>
//               <RegisterInput />
//               <div>
//                 <LogButton
//                   text="ادامه"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     if (isValid || dirty) {
//                       handleSubmit();
//                     }
//                   }}
//                 />
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export { Register };

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { PostRegister, SendVerifyMessage, VerifyMessage } from "../../../Core/Services/api/AuthApi/register.api";

const Register = () => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  const sendVerificationCode = async (values, actions) => {
    try {
      const response = await SendVerifyMessage({
        phoneNumber: values.phoneNumber,
      });
      setPhoneNumber(values.phoneNumber); // Save phone number for later steps
      actions.setSubmitting(false);
      handleNextStep();
    } catch (error) {
      actions.setErrors({ api: "Failed to send verification code" });
      actions.setSubmitting(false);
    }
  };

  const verifyCode = async (values, actions) => {
    try {
      await VerifyMessage({ phoneNumber, verifyCode: values.verifyCode });
      actions.setSubmitting(false);
      handleNextStep();
    } catch (error) {
      actions.setErrors({ api: "Verification code is incorrect" });
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
      alert("Registration successful!");
      // Redirect or navigate to another page here
    } catch (error) {
      actions.setErrors({ api: "Registration failed" });
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      {step === 1 && (
        <Formik
          initialValues={{ phoneNumber: "" }}
          onSubmit={sendVerificationCode}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              <h2 className="text-lg font-bold mb-4">
                Enter your phone number
              </h2>
              <Field
                name="phoneNumber"
                placeholder="Phone Number"
                className="input"
              />
              {errors.api && <div className="text-red-500">{errors.api}</div>}
              <button
                type="submit"
                className="btn mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Code"}
              </button>
            </Form>
          )}
        </Formik>
      )}

      {step === 2 && (
        <Formik initialValues={{ verifyCode: "" }} onSubmit={verifyCode}>
          {({ isSubmitting, errors }) => (
            <Form>
              <h2 className="text-lg font-bold mb-4">
                Enter verification code
              </h2>
              <Field
                name="verifyCode"
                placeholder="Verification Code"
                className="input"
              />
              {errors.api && <div className="text-red-500">{errors.api}</div>}
              <button
                type="submit"
                className="btn mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Verifying..." : "Verify Code"}
              </button>
              <button
                type="button"
                className="btn mt-2"
                onClick={handlePreviousStep}
              >
                Back
              </button>
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
            <Form>
              <h2 className="text-lg font-bold mb-4">Complete Registration</h2>
              <Field name="gmail" placeholder="Gmail" className="input" />
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="input mt-4"
              />
              <Field
                name="phoneNumber"
                placeholder="Phone Number"
                className="input mt-4"
                disabled
              />
              {errors.api && <div className="text-red-500">{errors.api}</div>}
              <button
                type="submit"
                className="btn mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
              <button
                type="button"
                className="btn mt-2"
                onClick={handlePreviousStep}
              >
                Back
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export { Register };