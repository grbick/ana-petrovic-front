import { action, makeAutoObservable, observable } from "mobx";
import { IUserData } from "./auth.types";
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
    makeAutoObservable(this),
      {
        userData: observable,
        userAuthenticated: observable,
        setUserAuthenticated: action,
      };
  }

  get roles() {
    return this.userData?.["http://localhost:5173/roles"] || [];
  }

  get primaryRole() {
    return this.roles?.[0];
  }

  get rbac() {
    if (this.userData) return getRoleAccess([this.userData.role]);
  }

  userAuthenticated: boolean = false;

  setUserAuthenticated = (isAuthenticated: boolean) =>
    (this.userAuthenticated = isAuthenticated);

  userData: IUserData | null = null;

  setUserData(user: IUserData) {
    this.userData = user;
  }
}

export const authStore = new AuthStore();
