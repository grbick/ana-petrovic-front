import { MenuProps } from "antd";

export const ROUTES = {
  home: "home",
  patientsNew: "patients/new",
  patientsActive: "patients/active",
  patientsArchive: "patients/archive",
  ingredients: "ingredients",
  recipes: "recipes",
  appointment: "appointment",
  settings: "settings",
  users: "users",
  schedule: "schedule",
  profile: "profile",
};

export const ROUTES_KEYS = [
  "home",
  "patientsArchive",
  "patientsActive",
  "ingredients",
  "recipes",
  "appointment",
  "schedule",
  "users",
  "settings",
  "profile",
];

export const SUBMENU_TITLES = {
  patients: "patients",
};

type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
