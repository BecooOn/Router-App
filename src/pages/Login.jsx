import React from "react";
import LoginForm from "../components/LoginForm";

const Login = ({isLoggedIn,setIsLoggedIn}) => {
  return <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>;
};

export default Login;
