// route.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import About from "../Page/About";
import Contact from "../Page/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true,
        element:<Home /> , 
      },
      {
        path:"/about",
        element:<About /> ,
      },
      {
        path:"/contact",
        element:<Contact /> ,
      }
    ],
  },
]);
// some code added  and some code added  some code added 
export default router;
