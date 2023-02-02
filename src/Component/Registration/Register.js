import React from 'react'
import "./Register.css";
import RegHeader from '../Navigation/RegHeader';
import {ReactComponent as BtcBG} from "../../Assets/img/bitcoinAndOtherCrypto-1.svg";
import { useState } from 'react';
import  axios  from 'axios';


const Register = () => {

  const [userData, setUserData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  })

  const registerEndPoint = "https://jsonplaceholder.typicode.com/posts";

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(registerEndPoint, {
      userData}).then((response) => console.log(response))
      .catch(err => console.log(err))
      // setUserData({})
  }

  const handleChange = (event) => {
    const {name , value} = event.target;
    setUserData(prevValue=>{
      console.log(userData)
      return{...prevValue, [name]:value}
    })
  }

  return (
    <>
      <RegHeader />
      <div className="registration-container">
        <div className="registration">
          <h1>Create an Account</h1>
          <p>Required field has an asterik *</p>
          <form>
            <label htmlFor="first name">
              <div>First Name *</div>
              <input
                required
                type="text"
                value={userData.firstName}
                name="firstName"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="last name">
              <div>Last Name *</div>
              <input
                required
                type="text"
                value={userData.lastName}
                name="lastName"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              <div>Password *</div>
              <input
                required
                type="password"
                value={userData.password}
                name="password"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              <div>Email *</div>
              <input
                required
                type="text"
                value={userData.email}
                name="email"
                onChange={handleChange}
              />
            </label>
            <button className="reg-submit" onClick={handleSubmit}>Create Account</button>
          </form>
        </div>
        <div className="registration-info">
          <h1 className="info-one">Do more with crypto, only on Unicoin</h1>
          <p>
            Set up your account and verify your photo ID to get started on
            trading crypto.
          </p>
          <BtcBG className="bg" />
        </div>
      </div>
    </>
  );
}

export default Register;