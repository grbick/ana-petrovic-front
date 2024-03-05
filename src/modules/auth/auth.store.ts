import { makeAutoObservable, runInAction } from "mobx";
import { IUserData } from "./auth.types";
import { authService } from "./auth.service";
import to from "await-to-js";
import { NavigateFunction } from "react-router-dom";
import { ROLES, USER_ACCESS_MAP } from "./auth.constants";

const getHasAccess = (userRoles: ROLES[], availableRolesList: ROLES[]) => {
  if (userRoles.includes(ROLES.ADMIN)) return true;
  return availableRolesList.some((availableRole) =>
    userRoles.includes(availableRole)
  );
};

const getRoleAccess = (roles: ROLES[]) => {
  return {
    ANALYTICS: {
      read: getHasAccess(roles, USER_ACCESS_MAP.ANALYTICS.read),
      write: getHasAccess(roles, USER_ACCESS_MAP.ANALYTICS.write),
    },
  };
};

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  get rbac() {
    return getRoleAccess([this.userData.role]);
  }

  userData: IUserData = {
    username: "koki",
    email: "koki",
    role: ROLES.ADMIN,
  };

  isLoggedIn: boolean = true;

  async logIn(navigate: NavigateFunction) {
    const [err, res] = await to(authService.logIn());
    if (err || !res) return navigate("/login");
    runInAction(() => (this.isLoggedIn = true));
    this.userData = res.data as IUserData;
    navigate("/home");
  }

  handleNavigation(navigate: NavigateFunction, pathname: string) {
    if (!this.isLoggedIn) return navigate("/login", { replace: true });
    if (pathname === "/") return navigate("/home", { replace: true });
  }
}

export const authStore = new AuthStore();
