import React, { ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Login.scss";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitLogin = () => {
    return 'Log in button pressed!'
  }

  return (
    <div className="log-in">
      <h2 className="title">Log in</h2>
      <span>Log in with your email and password</span>
      <form>
        <Input
          name="email"
          value={email}
          label="email"
          onChange={handleChange}
        />
        <Input
          name="password"
          value={password}
          label="password"
          onChange={handleChange}
        />
        <Button inverted={false} onClick={() => submitLogin()}>
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
