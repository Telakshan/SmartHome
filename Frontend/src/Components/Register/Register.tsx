import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./Register.scss";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const handleChange: (event: any) => void = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitRegister = () => {
    return 'Log in button pressed!'
  }

  return (
    <div className="register">
      <h2>Don't have an account?</h2>
      <span>Register with your email and password</span>

      <form>
        <Input
          name="name"
          value={name}
          label="display name"
          onChange={handleChange}
        />
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
        <Button inverted={false} onClick={() => submitRegister()}>Register</Button>
      </form>
    </div>
  );
};

export default Register;
