import { createBrowserRouter } from "react-router-dom";

import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home/Home";
import Aboutus from "../Pages/Home/Aboutus/AboutUs";
import Motionportfolli from "../Pages/Home/Portfolliosite/Site1/Motionportfollio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/portfollio",
        element: <Motionportfolli></Motionportfolli>,
      },
    ],
  },
]);
