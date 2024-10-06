import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../../app/MainLayout";
import { LandingPage } from "../../Screens/LandingPage";
import LogLayout from "../../app/LogLayout";
import { RegisterPage } from "../../Screens/RegisterPage";

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
    ],
  },
  {
    path:"/register",
    element:<LogLayout/>,
    children:[
      {
        path:"/register",
        element:<RegisterPage/>
      }
    ]
  }
]);
