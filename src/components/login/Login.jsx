import "./login.css";
import Logo from "../../assets/logo.webp";

import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <img src={Logo} alt="logo" />
      <form>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
