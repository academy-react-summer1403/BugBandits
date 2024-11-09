import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../Config/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export { App };
