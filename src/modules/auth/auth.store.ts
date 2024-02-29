import { makeAutoObservable, runInAction } from "mobx";
import { IUserData } from "./auth.types";
import { authService } from "./auth.service";
import to from "await-to-js";
import { NavigateFunction } from "react-router-dom";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  userData!: IUserData | null;

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
