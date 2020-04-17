import Axios from "axios";
import { LOGIN_USER, REGISTER_USER } from "./types";

export const loginUser = ({ email, password }) => {
  const response = Axios.post("/api/users/login", { email, password }).then(
    (response) => response.data
  );

  return { type: LOGIN_USER, payload: response };
};

export const registerUser = ({ email, name, password }) => {
  const response = Axios.post("/api/users/register", {
    email,
    name,
    password,
  }).then((response) => response.data);

  return { type: REGISTER_USER, payload: response };
};
