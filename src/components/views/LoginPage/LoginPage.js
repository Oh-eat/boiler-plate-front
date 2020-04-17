import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

const LoginPageBlock = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
  }
`;

function LoginPage(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form)).then((response) => {
      if (response.payload.success) {
        props.history.push("/");
      } else {
        alert("ERROR");
      }
    });
  };

  return (
    <LoginPageBlock>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </LoginPageBlock>
  );
}

export default LoginPage;
