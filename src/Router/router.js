import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blogs/Blog";
import Contact from "../components/Contact/Contact";
import Car from "../components/Details/Car";
import Swap from "../components/Details/Swap";
import Travel from "../components/Details/Travel";
import Home from "../components/Home/Home";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/swap-projects",
        element: <Swap></Swap>,
      },
      {
        path: "/travel-projects",
        element: <Travel></Travel>,
      },
      {
        path: "/car-service-projects",
        element: <Car></Car>,
      },
    ],
  },
]);

export default router;
