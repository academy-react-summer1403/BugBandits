import React from "react"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./MainLayout"
import LandingHolder from "../../Components/Landing/LandingHolder"
import { Blog } from "../../Components/Blog"

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[[
                {
                    path:"/",
                    element:<LandingHolder />
                },
                {
                    path:"/",
                    element:<Blog />
                },
                
        ]]
    }
])
