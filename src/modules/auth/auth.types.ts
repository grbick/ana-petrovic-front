export enum RoleEnum {
  ADMIN = "ADMIN",
  NUTRITIONIST = "NUTRITIONIST",
  DOCTOR = "DOCTOR",
  FINANCE = "FINANCE",
  CLIENT = "CLIENT",
}

export interface IUserData {
  username: string;
  email: string;
  role: RoleEnum;
}
