import React from "react";
import { useRoutes } from "react-router-dom";

import HomePage from "./Home";
import P404 from "./P404";

const routesMap = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <P404 />,
  },
];

const Routes = () => useRoutes(routesMap);

export default Routes;
