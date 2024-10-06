import { Field, Formik, Form } from "formik";
import React from "react";

const LogInput = ({ placeholder , name}) => {
    
//   const validationSchema = yup.object().shape({
   
//   });

  return (
    <Formik>
      <Form>
        <Field
            name={name}
          placeholder={placeholder}
          className="w-72 h-10 bg-soft_grey mb-2 rounded-lg placeholder:text-[#8d8d8d] placeholder:text-sm px-3 outline-none"
        ></Field>
      </Form>
    </Formik>
  );
};

export { LogInput };
