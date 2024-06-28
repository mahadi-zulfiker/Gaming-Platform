import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../component/Home";
import About from "../component/detailSection/About";
// import Conventions from "../component/detailSection/Conventions";
import Blog from "../component/detailSection/Blog";
import Community from "../component/detailSection/Community";
import Contact from "../component/detailSection/Contact";
import RecentNews from "../component/detailSection/RecentNews";
import PreviousNews from "../component/detailSection/PreviousNews";
import BuyTicket from "../component/BuyTicket";
import Profile from "../component/detailSection/Profile";
import Secure from "../auth/Secure";
import Registration from "../Authentication/Register";
import Login from "../Authentication/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                loader:()=> fetch(`/GamingConventions.json`),
                element: <Home></Home>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:"/about",
                element:<About></About>
            },
           
            {
                path:"/blog",
                loader:()=> fetch(`/mixnews.json`),
                element:<Blog></Blog>
            },
            {
                path:"/community",
                element:<Community></Community>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
            path:"/recentnews",
            loader:()=> fetch(`/latestnews.json`),
            element:<RecentNews></RecentNews>
            },
            {
                path:"/previousnews",
                loader:()=> fetch(`/previousnews.json`),
                element:<PreviousNews></PreviousNews>
            },
            {
            path:"/buy-ticket/:id",
            loader:({params})=> fetch(`/GamingConventions.json`),
            element: <Secure><BuyTicket></BuyTicket></Secure>
            },
            {
                path:"/profile",
                element:<Secure><Profile></Profile></Secure> 
            }

        ]

    }
])
export default router;