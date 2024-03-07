import { User } from "@auth0/auth0-react";
import { ROLES } from "./auth.constants";

export interface IUserData extends User {
  "http://localhost:5173/roles": ROLES[];
}
