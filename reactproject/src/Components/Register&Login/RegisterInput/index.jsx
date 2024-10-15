// import { Field, Form, Formik, ErrorMessage } from "formik";
// import React from "react";
// import { validationSchema } from "../../../Core/Validation";

// const RegisterInput = () => {

//   return (
//     <Formik
//       initialValues={{ gmail: "", password: "", number: "" }}
//       validationSchema={validationSchema}
//     >
//       <Form>
//         <Field
//           name="name"
//           placeholder="نام"
//           className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
//         ></Field>
//         <ErrorMessage
//           name="name"
//           component={"div"}
//           className="text-red-600 text-xs"
//         ></ErrorMessage>
//         <Field
//           name="number"
//           placeholder="شماره تماس"
//           className="w-72 h-10 text-right bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
//         ></Field>
//         <ErrorMessage
//           name="number"
//           component={"div"}
//           className="text-red-600 text-xs"
//         ></ErrorMessage>
//         <Field
//           name="password"
//           type="password"
//           placeholder="رمز عبور"
//           className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
//         ></Field>
//         <ErrorMessage
//           name="password"
//           component={"div"}
//           className="text-red-600 text-xs"
//         ></ErrorMessage>
//       </Form>
//     </Formik>
//   );
// };

// export { RegisterInput };

import { Field, Form, ErrorMessage } from "formik";
import React from "react";
import { validationSchema } from "../../../Core/Validation";

const RegisterInput = () => {
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
        name="gmail"
        placeholder="ایمیل"
        className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
      />
      <ErrorMessage
        name="gmail"
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
        type="password"
        placeholder="رمز عبور"
        className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
      />
      <ErrorMessage
        name="password"
        component={"div"}
        className="text-red-600 text-xs"
      />
    </>
  );
};

export { RegisterInput };
