import Axios from "axios";
import { LOGIN_USER } from "./types";

export const loginUser = ({ email, password }) => {
  const response = Axios.post("/api/users/login", { email, password }).then(
    (response) => response.data
  );

  return { type: LOGIN_USER, payload: response };
};
