import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                Component:""
            },
            {
                path:"/about",
                Component:About
            }
        ]
    }
])
