import { Field } from "formik";
import React from "react";

const RememberMe = () => {
  return (
    <label
      htmlFor="remember"
      className="flex gap-2 mt-1 mb-1 text-sm text-charcoal_gray "
    >
      <Field name="remember" type="checkBox" />
      به خاطر بسپار
    </label>
  );
};

export { RememberMe };
