import { Navigate, createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ErrorPage } from "../components/ErrorPage/ErrorPage";
import MyLayout from "../components/Layout/MyLayout";

const SchedulePage = loadable(
  () => import("../pages/SchedulePage/SchedulePage")
);
const LandingPage = loadable(() => import("../pages/LandingPage/LandingPage"));
const ActivePatientsPage = loadable(
  () => import("../pages/PatientsPage/ActivePatientsPage/ActivePatientsPage")
);
const ArchivedPatientsPage = loadable(
  () =>
    import("../pages/PatientsPage/ArchivedPatientsPage/ArchivedPatientsPage")
);

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MyLayout />,
    children: [
      {
        path: "/home",
        element: <LandingPage />,
      },
      {
        path: "/patients/active",
        element: <ActivePatientsPage />,
      },
      {
        path: "/patients/archive",
        element: <ArchivedPatientsPage />,
      },
      {
        path: "/schedule",
        element: <SchedulePage />,
      },
      { path: "*", element: <Navigate to="/home" replace /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
