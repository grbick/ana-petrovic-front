export enum ROLES {
  ADMIN = "ADMIN",
  NUTRITIONIST = "NUTRITIONIST",
  DOCTOR = "DOCTOR",
  FINANCE = "FINANCE",
  CLIENT = "CLIENT",
}

export interface IUserAccesMapConfig {
  write: ROLES[];
  read: ROLES[];
}

export const USER_ACCESS_MAP: { [key: string]: IUserAccesMapConfig } = {
  ANALYTICS: {
    read: [ROLES.ADMIN, ROLES.FINANCE],
    write: [ROLES.ADMIN, ROLES.FINANCE],
  },
};
