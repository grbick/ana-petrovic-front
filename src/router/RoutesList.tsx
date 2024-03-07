import { Route, Routes, Navigate } from "react-router-dom";

import { authStore } from "../modules/auth/auth.store";
import { observer } from "mobx-react-lite";
import MyLayout from "../components/Layout/MyLayout";
import { useAuth0 } from "@auth0/auth0-react";
import { ROUTE_CONFIG, flattenRoutes } from "./router.constants";
import { useEffect } from "react";
import { IUserData } from "../modules/auth/auth.types";

export const RoutesList = observer(() => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated)
      loginWithRedirect({
        authorizationParams: {
          redirect_uri: "http://localhost:5173/",
          audience: "http://localhost:5173",
        },
      });
    if (!user) return;
    if (!authStore.userData) {
      authStore.setUserData(user as IUserData);
    }
  }, [user, isAuthenticated, loginWithRedirect]);

  if (!authStore.userData) return;

  const routes = ROUTE_CONFIG[authStore.primaryRole];

  const flatRoutes = flattenRoutes(routes);

  if (!flatRoutes) return;

  return (
    <Routes>
      <Route path="/" element={<MyLayout />}>
        <Route
          path="patients"
          element={<Navigate to="/patients/active" replace />}
        />
        {flatRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.key} />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
});
