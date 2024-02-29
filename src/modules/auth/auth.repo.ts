import { axios } from "../../utils/axios";

export const authRepo = {
  logIn: () => {
    return axios.get("loginAPIurl");
  },
};
