import { Route, Routes, Navigate } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ROUTE_CONFIG, flattenRoutes } from "./router.constants";
import { authStore } from "../modules/auth/auth.store";
import { observer } from "mobx-react-lite";
import MyLayout from "../components/Layout/MyLayout";

export const RoutesList = observer(() => {
  const routes = ROUTE_CONFIG[authStore.userData!.role];

  const flatRoutes = flattenRoutes(routes);

  if (!flatRoutes)
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} key="login" />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} key="login" />
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
