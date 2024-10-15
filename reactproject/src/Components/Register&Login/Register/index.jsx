// import React from "react";
// import { LogInput } from "../../Common/LogInput";
// import { NavLink } from "react-router-dom";
// import { LogButton } from "../../Common/LogButton";
// import { RegisterTitle } from "../RegisterTitle";
// import { RegisterInput } from "../RegisterInput";

// const Register = () => {
//   return (
//     <div dir="rtl" className="w-96 absolute top-[110px] right-[310px] flex">
//       <div className="pr-12 pt-16">
//         <RegisterTitle log="وارد شوید." text="حساب کاربری دارید؟" />
//         <div className="pt-6">
//           <RegisterInput />
//         </div>
//         <div>
//           <LogButton text="ادامه" nextroute="/register/recievecode" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export { Register };

import React from "react";
import { useNavigate } from "react-router-dom";
import { LogButton } from "../../Common/LogButton";
import { RegisterTitle } from "../RegisterTitle";
import { RegisterInput } from "../RegisterInput";
import { Formik, Form } from "formik";
import { validationSchema } from "../../../Core/Validation";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = { name: "", gmail: "", password: "", number: "" };

  const handleSubmit = (values) => {
    navigate("/register/recievecode");
  };

  return (
    <div dir="rtl" className="w-96 absolute top-[110px] right-[310px] flex">
      <div className="pr-12 pt-12">
        <RegisterTitle log="وارد شوید." text="حساب کاربری دارید؟" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form>
              <RegisterInput />
              <div>
                <LogButton
                  text="ادامه"
                  onClick={(e) => {
                    e.preventDefault();
                    if (isValid && dirty) {
                      handleSubmit();
                    }
                  }}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export { Register };
