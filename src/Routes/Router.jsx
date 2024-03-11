import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Homes/Home/Home";
import About_Us from "../Pages/About_Us/About_Us";
import Shop from "../Pages/Shop/Shop";
import Contact_Us from "../Pages/Contact_Us/Contact_Us";

export const router = createBrowserRouter([
    {
        path: '/',
        element : <Main/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/about_us',
                element : <About_Us/>
            },
            {
                path : '/shop',
                element : <Shop/>
            },
            {
                path : '/contact_us',
                element : <Contact_Us/>
            }
        ]
    }
])