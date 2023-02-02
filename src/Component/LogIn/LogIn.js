import React, { useState } from "react";
import ".LogIn.css";
import { Link } from "react-router-dom";
import Axios from "axios";

function LogIn() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);

  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const postLoginData = (e) => {
    e.preventDefault();
    Axios.post(baseUrl, {
      email,
      password,
      confirmPassword,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="login">
      <div className="login_text">
        <h1>WELCOME TO UNICOIN</h1>
        <p>Login to have access</p>

        <form className="login_form">
          <h3>Email:</h3>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h3>Password:</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <h3>Confirm Password:</h3>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div className="pword">
            <Link to="/forgotpassword"> Forgot Password?</Link>
          </div>

          <h2></h2>
          <button onClick={postLoginData}>Log In</button>
          <p>
            Need an account?
            <span>
              <Link to="/signup">Sign up here</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIn