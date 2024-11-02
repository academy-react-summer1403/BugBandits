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
import UserPanelLayout from "../../app/UserPanelLayout";
import { UserPanelPage } from "../../Screens/UserPanelPage";
import { MyCoursesPage } from "../../Screens/UserPanelMyCoursesPage";
import { FavoritePage } from "../../Screens/UserPanelFavoritePage";
import { MySuggestionPage } from "../../Screens/UserPanelSuggestion";
import { EditProfilePage } from "../../Screens/UserPanelEditProfile";
import { AboutUsPage } from "../../Screens/AboutUsPage";
import { EnterPasswordPage } from "../../Screens/EnterPasswordPage";
import { BlogPage } from "../../Screens/BlogPage";
import { BlogDetailPage } from "../../Screens/BlogDetailPage";

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
        path: "/courses/detailpage/:id",
        element: <CourseDetailPage />,
      },
      {
        path: "/teachers",
        element: <TeachersPage />,
      },
      {
        path: "/teachers/detail/:teacherId",
        element: <TeacherDetailPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUsPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/detail/:id",
        element: <BlogDetailPage />,
      },
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
      {
        path: "/register/enterpassword",
        element: <EnterPasswordPage />,
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
  {
    path: "/panel",
    element: <UserPanelLayout />,
    children: [
      {
        path: "/panel",
        element: <UserPanelPage />,
      },
      {
        path: "/panel/mycourses",
        element: <MyCoursesPage />,
      },
      {
        path: "/panel/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/panel/mysuggestion",
        element: <MySuggestionPage />,
      },
      {
        path: "/panel/editprofile",
        element: <EditProfilePage />,
      },
    ],
  },
]);
