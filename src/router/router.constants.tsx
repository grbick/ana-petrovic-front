import { ReactNode } from "react";
import {
  BarChartOutlined,
  CalendarOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { ROLES } from "../modules/auth/auth.constants";
import LandingPage from "../pages/LandingPage/LandingPage";
import SchedulePage from "../pages/SchedulePage/SchedulePage";
import AnalyticsPage from "../pages/AnalyticsPage/AnalyticsPage";
import ArchivedPatientsPage from "../pages/PatientsPage/ArchivedPatientsPage/ArchivedPatientsPage";
import ActivePatientsPage from "../pages/PatientsPage/ActivePatientsPage/ActivePatientsPage";

export interface IRouteConfig {
  label: string;
  path: string;
  element: ReactNode;
  icon: ReactNode;
  key: string;
  children?: IRouteConfig[];
  hideInMenu?: boolean;
}

const ROUTE_LANDING = {
  label: "Početna",
  path: "home",
  element: <LandingPage />,
  key: "home",
  icon: <HomeOutlined />,
};

const ROUTE_SCHEDULE = {
  label: "Raspored",
  path: "schedule",
  element: <SchedulePage />,
  key: "schedule",
  icon: <CalendarOutlined />,
};
const ROUTE_ANALYTICS = {
  label: "Analitika",
  path: "analytics",
  element: <AnalyticsPage />,
  key: "analytics",
  icon: <BarChartOutlined />,
};
const ROUTE_PATIENTS = {
  label: "Pacijenti",
  path: "patients",
  element: <></>,
  key: "patients",
  icon: <BarChartOutlined />,
  children: [
    {
      label: "Arhivirani pacijenti",
      path: "patients/archived",
      element: <ArchivedPatientsPage />,
      icon: <BarChartOutlined />,
      key: "patients/archived",
    },
    {
      label: "Aktivni pacijenti",
      path: "patients/active",
      element: <ActivePatientsPage />,
      icon: <BarChartOutlined />,
      key: "patients/active",
    },
  ],
};

const ADMIN_ROUTES: IRouteConfig[] = [
  ROUTE_LANDING,
  ROUTE_ANALYTICS,
  ROUTE_SCHEDULE,
  ROUTE_PATIENTS,
];

const NUTRITIONIST_ROUTES: IRouteConfig[] = [
  ROUTE_LANDING,
  ROUTE_SCHEDULE,
  ROUTE_PATIENTS,
];

export const ROUTE_CONFIG: { [key: string | ROLES]: IRouteConfig[] } = {
  [ROLES.ADMIN]: ADMIN_ROUTES,
  [ROLES.NUTRITIONIST]: NUTRITIONIST_ROUTES,
};

export const flattenRoutes = (routes: IRouteConfig[]) =>
  routes?.reduce<IRouteConfig[]>((acc, route) => {
    return route.children ? [...acc, ...route.children] : [...acc, route];
  }, []);

export const ROUTE_SUBMENU_KEYS = ["patients"];
