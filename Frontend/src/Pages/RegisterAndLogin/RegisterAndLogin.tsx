import React from "react";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";

import "./RegisterAndLogin.scss";

const RegisterAndLogin: React.FC = () => {
  return (
    <div className='register-login'>

      <Login />
      <Register />
    </div>
  );
};

export default RegisterAndLogin;
