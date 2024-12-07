import * as yup from "yup";

export const validation = yup.object().shape({
  email: yup.string().required("این فیلد اجباریست"),
  userName: yup.string().required("این فیلد اجباریست"),
  passwordU: yup.string().required("این فیلد اجباریست"),
  passwordE: yup.string().required("این فیلد اجباریست"),
});
