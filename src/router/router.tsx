import { Navigate, createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import MyLayout from "../components/Layout/MyLayout";

const CalendarPage = loadable(
  () => import("../pages/CalendarPage/CalendarPage")
);
const LandingPage = loadable(() => import("../pages/LandingPage/LandingPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MyLayout />,
    children: [
      {
        path: "/calendar",
        element: <CalendarPage />,
      },
      {
        path: "/home",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
