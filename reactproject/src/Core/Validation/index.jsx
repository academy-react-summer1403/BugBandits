import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("لطفا این قسمت را پر کنید."),
  password: yup.string().required("لطفا این قسمت را پر کنید."),
  gmail: yup
    .string()
    .email("لطفا یک ایمیل معتبر وارد کنید.")
    .required("لطفا این قسمت را پر کنید."),
  number: yup
    .string()
    .required("لطفا این قسمت را پر کنید.")
    .matches(/^\d{11}$/, "لطفا یک شماره معتبر وارد کنید."),
  // .typeError("لطفا یک شماره معتبر وارد کنید."),
});
