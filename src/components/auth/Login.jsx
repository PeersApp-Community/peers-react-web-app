import React from "react";

const Login = () => {
  return (
    <div>
      <h1 className="title">Login</h1>
      <EtraText>
        Forgotten Password?{" "}
        <TextLink to="/forgottenpassword">Reset it</TextLink>
      </EtraText>
    </div>
  );
};

export default Login;
