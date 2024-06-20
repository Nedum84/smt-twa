import { lazy } from "react";
import { Navigate } from "react-router-dom";

const HomePage = lazy(() => import("Pages/Home"));
const TransferPage = lazy(() => import("Pages/Transfer"));

const ROUTES = {
  home: {
    path: "/",
    element: HomePage,
  },
  transfer: {
    path: "/transfer",
    element: TransferPage,
  },
  error404: {
    path: "*",
    element: () => <Navigate replace to="/" />,
  },
};

export default ROUTES;
