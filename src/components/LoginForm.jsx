import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleSignIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
      return;
    }
    setIsLoggedIn(!isLoggedIn);
    navigate("/");
  };

  const handleContinueAsGuest = () => {
    emailRef.current.value = "";
    passwordRef.current.value = "";
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
          ref={emailRef}
          required
        />
        <br />
        <input
          type="password"
          id="password"
          className="mb-3 p-2 input"
          placeholder="🔑 password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          ref={passwordRef}
          required
        />
        <br />

        {/* <div className="mb-3">
          <Link to="/reset">Forgot your password?</Link>
        </div> */}
        <div className="mb-3">
          <button
            type="submit"
            onClick={handleSignIn}
            className="btn btn-primary"
          >
            SIGN IN
          </button>
        </div>
        {/* <div className="mb-3">
          <span>
            if you don't have an account yet.
            <Link to="/register">Sign Up!</Link>
          </span>
        </div> */}
        <div className="mb-3">
          <button
            className="btn btn-outline-primary"
            onClick={handleContinueAsGuest}
          >
            Continue as Guest
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
