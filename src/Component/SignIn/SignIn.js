import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./SignIn.css";


function SignIn() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  const postData = (e) => {
    e.preventDefault();
    Axios.post(baseUrl, {
      email,
      password,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="signin">
      <div className="signin_text">
        <h3 className="signin_ptag">UNICOIN</h3>
        <p></p>
        <p className="signin_ptag_two">Sign In to Unicoin</p>

        <form>
          <label htmlFor="email">
          <div>Email:</div>
          <input className="input-box"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </label>

          <label htmlFor="passsword">
          <div>Password:</div>
          <input className="input-box"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </label>

          <div></div>
          <button className="login_submit" onClick={postData}>LogIn</button>
          <p>
            Create an account?
            <Link to="/Register">
              {" "}
              <span>Register Here</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn
