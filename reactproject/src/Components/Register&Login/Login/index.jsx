import React, { useState } from "react";
import { LoginTitle } from "../LoginTitle";
import { LogButton } from "../../Common/LogButton";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginInputNumber } from "../LoginInputNumber";
import { Form, Formik } from "formik";
import { validationSchema } from "../../../Core/Validation";
import { Postlogin } from "../../../Core/Services/api/AuthApi/login.api";
import toast from "react-hot-toast";

const Login = () => {
  // const navigate = useNavigate();
  const [phoneOrGmail, setPhoneOrGmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  // const handleLogin = async () => {
  //   const user = { phoneOrGmail, password, rememberMe };
  //   try {
  //     const response = await Postlogin(user);
  //     if (response && response.success) {
  //       toast.success("Login successful!");
  //       navigate("/"); // Navigate to home page on success
  //     } else {
  //       toast.error(response?.message || "Login failed.");
  //     }
  //   } catch (err) {
  //     toast.error("Invalid login credentials. Please try again.");
  //   }
  // };
  const handleLogin = async () => {
    e.preventDefault();
    const userObj = { phoneOrGmail, password, rememberMe };

    try {
      const result = await Postlogin(userObj);
      console.log("Login successful:", result);
    } catch (error) {
      setError(" Please try again.");
    }
  };

  return (
    <div className="w-[1000px] h-[500px] absolute top-[110px] right-[310px] flex">
      <div className="p-4 w-5/6 h-full"></div>
      <div dir="rtl" className="w-2/3 h-full pr-12 pt-16">
        <LoginTitle
          text="حساب کاربری ندارید؟"
          log="ثبت نام کنید."
          title="ورود با موبایل"
        />
        <Formik
          initialValues={{
            number: "",
            email: "",
            passwordE: "",
            phone: "",
            passwordU: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="mt-5">
              <LoginInputNumber
                phoneOrGmail={phoneOrGmail}
                setPhoneOrGmail={setPhoneOrGmail}
                password={password}
                setPassword={setPassword}
                rememberMe={rememberMe}
                setRememberMe={setRememberMe}
              />
            </div>
            <div>
              <LogButton onClick={(e) => e.preventDefault()} text="ادامه" />
            </div>
          </Form>
        </Formik>
        <div className="flex flex-row text-xs text-[#8d8d8d] gap-40 pt-1">
          <NavLink to="/login/emaillogin" className="cursor-pointer">
            ورود با ایمیل
          </NavLink>
          <NavLink to="/login/forgetpassword" className="cursor-pointer">
            فراموشی رمز
          </NavLink>
        </div>
        <div>
          <h3></h3>
        </div>
      </div>
    </div>

    // <div className="login-container">
    //   <form onSubmit={handleLogin}>
    //     <input
    //       type="text"
    //       placeholder="Phone or Email"
    //       value={phoneOrGmail}
    //       onChange={(e) => setPhoneOrGmail(e.target.value)}
    //       required
    //     />
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //     <label>
    //       <input
    //         type="checkbox"
    //         checked={rememberMe}
    //         onChange={(e) => setRememberMe(e.target.checked)}
    //       />
    //       Remember Me
    //     </label>
    //     <button type="submit">Log In</button>
    //     {error && <p className="error">{error}</p>}
    //   </form>
    // </div>
  );
};

export { Login };
