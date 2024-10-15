import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { validationSchema } from "../../../Core/Validation";

const ForgetPassInput = () => {
  return (
    <Formik
      initialValues={{ password: "" }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          name="password"
          type="password"
          placeholder="رمز جدید"
          className="w-72 h-10 bg-soft_grey mb-2 rounded-lg text-charcoal_gray placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
        ></Field>
        <ErrorMessage
          name="password"
          component={"div"}
          className="text-red-600 text-xs"
        ></ErrorMessage>
      </Form>
    </Formik>
  );
};

export { ForgetPassInput };
