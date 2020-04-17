import { handleActions } from "redux-actions";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_actions/types";

const initialState = {};

const user = handleActions(
  {
    [LOGIN_USER]: (state, { payload }) => ({
      ...state,
      loginSuccess: payload,
    }),
    [REGISTER_USER]: (state, { payload }) => ({
      ...state,
      registerSuccess: payload,
    }),
    [AUTH_USER]: (state, { payload }) => ({
      ...state,
      userData: payload,
    }),
  },
  initialState
);

export default user;
