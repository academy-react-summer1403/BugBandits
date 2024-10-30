import React from "react";
import { Field, ErrorMessage } from "formik";

const LoginInputNumber = () => {
  return (
    <div>
      <Field
        name="number"
        placeholder="شماره موبایل"
        className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
      ></Field>
      <ErrorMessage
        name="number"
        component={"div"}
        className="text-red-600 text-xs"
      ></ErrorMessage>
    </div>
  );
};

export { LoginInputNumber };
