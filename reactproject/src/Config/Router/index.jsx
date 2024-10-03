import React from "react"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./MainLayout"
import LandingHolder from "../../Components/Landing/LandingHolder"


export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
            [
                {
                    path:"/",
                    element:<LandingHolder />
                },
                
            ]
        ]
    }
])
