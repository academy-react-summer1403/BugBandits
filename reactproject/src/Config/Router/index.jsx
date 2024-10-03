import React from "react"
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./../../app/MainLayout";
import {LandingHolder} from "../../Components/Landing/LandingHolder"

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
                {
                    index:true ,
                    path:"/",
<<<<<<< HEAD
                    element:<LandingHolder />,
                },
=======
                    element:<LandingHolder />
                },
               
                
>>>>>>> Develop
                
                
        ]
    }
])
