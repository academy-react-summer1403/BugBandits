import React from "react";
import { Field, ErrorMessage } from "formik";

const LoginInputEmail = () => {
  return (
    <div>
      <Field
        name="gmail"
        placeholder="ایمیل"
        className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
      ></Field>
      <ErrorMessage
        name="gmail"
        component={"div"}
        className="text-red-600 text-xs"
      ></ErrorMessage>
    </div>
  );
};

export { LoginInputEmail };
