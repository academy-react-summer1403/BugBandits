import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../../app/MainLayout";
import { LandingPage } from "../../Screens/LandingPage";
import LogLayout from "../../app/LogLayout";
import { RegisterPage } from "../../Screens/RegisterPage";
import RegisterCodePage from "../../Screens/RegisterCodePage";
import { LoginPage } from "../../Screens/LoginPage";
import { LoginCodePage } from "../../Screens/LoginCodePage";
import { CoursesPage } from "../../Screens/CoursesPage";
import { ForgetPassWordPage } from "../../Screens/ForgetPassWord";
import { LoginEmailPage } from "../../Screens/EmailLoginPage";
import { CourseDetailPage } from "../../Screens/CoursesDetailPage";
import { TeachersPage } from "../../Screens/TeachersPage";
import { TeacherDetailPage } from "../../Screens/TeacherDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/courses/datailpage/:id",
        element: <CourseDetailPage />,
      },
      {
        path: "/teachers",
        element: <TeachersPage />,
      },
      {
        path:"/teachers/detail",
        element:<TeacherDetailPage/>
      }
    ],
  },
  {
    path: "/register",
    element: <LogLayout />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/register/recievecode",
        element: <RegisterCodePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/login/recievecodelog",
        element: <LoginCodePage />,
      },
      {
        path: "/login/forgetpassword",
        element: <ForgetPassWordPage />,
      },
      {
        path: "/login/emaillogin",
        element: <LoginEmailPage />,
      },
    ],
  },
]);
