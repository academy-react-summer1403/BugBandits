// import React from "react";
// import { LogButton } from "../../Common/LogButton";
// import { LoginTitle } from "../LoginTitle";
// import { NavLink, useNavigate } from "react-router-dom";
// import { LoginInputEmail } from "../LoginInputEmail";
// import { Form, Formik } from "formik";
// import { validationSchema } from "../../../Core/Validation";

// const LoginEmail = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (values) => {
//     navigate("/register/enterpassword");
//   };
//   return (
//     <div className="w-[1000px] h-[500px] absolute top-[110px] right-[310px] flex">
//       <div className="p-4 w-5/6 h-full"></div>
//       <div dir="rtl" className="w-2/3 h-full pr-12 pt-16">
//         <LoginTitle
//           text="حساب کاربری ندارید؟"
//           log="ثبت نام کنید."
//           title="ورود با ایمیل"
//         />
//         <Formik
//           initialValues={{ gmail: "" }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ isValid, dirty }) => (
//             <Form>
//               <div className="mt-5">
//                 <LoginInputEmail />
//               </div>
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
//         <div className="flex flex-row text-xs text-[#8d8d8d] gap-40 pt-1">
//           <NavLink to="/login" className="cursor-pointer">
//             ورود با موبایل
//           </NavLink>
//           <NavLink to="/login/forgetpassword" className="cursor-pointer">
//             فراموشی رمز
//           </NavLink>
//         </div>
//         <div>
//           <h3></h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { LoginEmail };

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
