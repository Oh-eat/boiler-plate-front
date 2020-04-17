import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

const RegisterPageBlock = styled.main`
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

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      return alert("비밀번호와 비밀번호 확인이 동일하지 않습니다.");
    }

    dispatch(registerUser(form)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("ERROR");
      }
    });
  };

  return (
    <RegisterPageBlock>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
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
        <label>Confirm Password</label>
        <input
          type="password"
          name="passwordConfirm"
          value={form.passwordConfirm}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </RegisterPageBlock>
  );
}

export default RegisterPage;
