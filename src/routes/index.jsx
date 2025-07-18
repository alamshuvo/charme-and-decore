// route.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true,
        element:<Home /> , 
      }
    ],
  },
]);

export default router;
