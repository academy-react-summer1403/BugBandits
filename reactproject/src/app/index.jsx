import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../Config/Router";

function App() {
  return <RouterProvider router={router} />;
}

export { App };
