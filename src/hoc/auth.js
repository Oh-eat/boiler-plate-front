import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "../_actions/user_action";
import { withRouter } from "react-router-dom";

export default function (Component, option) {
  function Func(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authUser()).then(({ payload: { isAuth, isAdmin } }) => {
        console.log(option, isAuth, isAdmin);
        if (option === "needAuth" && !isAuth) {
          props.history.push("/login");
        } else if (option === "withoutAuth" && isAuth) {
          props.history.push("/");
        } else if (option === "adminOnly" && !isAdmin) {
          alert("접근 불가");
          props.history.push("/");
        }
      });
    }, [dispatch, props.history]);

    return <Component />;
  }
  return withRouter(Func);
}
