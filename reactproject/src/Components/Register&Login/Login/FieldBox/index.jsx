import { Field, ErrorMessage } from "formik";
import React from "react";

const FieldBox = ({ type = "text", name, label, id = label, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Field
        name={name}
        className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
        id={id}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage
        name={name}
        component={"p"}
        className="text-red-600 text-xs"
      />
    </div>
  );
};

export { FieldBox };
