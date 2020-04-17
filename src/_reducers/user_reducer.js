import { handleActions } from "redux-actions";
import { LOGIN_USER } from "../_actions/types";

const initialState = {};

const user = handleActions(
  {
    [LOGIN_USER]: (state, { payload }) => ({ ...state, loginSuccess: payload }),
  },
  initialState
);

export default user;
