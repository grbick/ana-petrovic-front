import { ROLES } from "./auth.constants";

export interface IUserData {
  username: string;
  email: string;
  role: ROLES;
}
