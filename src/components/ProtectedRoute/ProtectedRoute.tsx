import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Navigate } from "react-router-dom";

import { authStore } from "../../modules/auth/auth.store";
import { RoleEnum } from "../../modules/auth/auth.types";

interface IProtectedRouteProps {
  component: any;
  allowedRoutes: any[];
}

export const ProtectedRoute: FC<IProtectedRouteProps> = observer(
  ({ component, allowedRoutes }) => {
    if (
      !!authStore.userData?.role &&
      authStore.userData?.role !== RoleEnum.ADMIN &&
      !allowedRoutes.includes(authStore.userData?.role)
    )
      return <Navigate to={"/unauthorized"} />;

    return component;
  }
);
