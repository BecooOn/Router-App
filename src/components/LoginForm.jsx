import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
      return;
    }
    setIsLoggedIn(!isLoggedIn);
    navigate("/");
  };
  return (
    <Container className="border border-2 d-flex justify-content-center p-5 text-center loginForm">
      <Form>
        <Image
          src="./img/becooOn.png"
          roundedCircle
          className="mb-3"
          width={"50px"}
          alt="becooOn"
        />
        <input
          type="text"
          id="email"
          placeholder="📧 e-mail"
          className="mb-3 p-2 input"
          required
        />
        <br />
        <input
          type="password"
          id="password"
          className="mb-3 p-2 input"
          placeholder="🔑 password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          required
        />
        <br />

        <div className="mb-3">
          <a href="resetpwd.jsp">Forgot your password?</a>
        </div>
        <div className="mb-3">
          <button
            type="submit"
            onClick={handleSignIn}
            className="btn btn-primary"
          >
            SIGN IN
          </button>
        </div>
        <div className="mb-3">
          <span>
            if you don't have an account yet.
            <a href="register.jsp">Sign Up!</a>
          </span>
        </div>
        <div className="mb-3">
          <button className="btn btn-outline-primary">
            Continue with Google
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
