import { authRepo } from "./auth.repo";

export const authService = {
  logIn: () => {
    return authRepo.logIn();
  },
};
