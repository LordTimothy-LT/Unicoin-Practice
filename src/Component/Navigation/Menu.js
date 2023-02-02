import React from 'react'
import "./Menu.css";
import logo from "../../Assets/img/logo.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className='menu'>
        <div className='menu_option'>
          <div className="menu_logo">
              <img src={logo} />
          </div>
          <div className="menu_nav">
            <nav>
              <ul>
                <li>Explore</li>
                <li>Learn</li>
                <li>Business</li>
              </ul>
            </nav>
          </div>
          <div className="menu_btn">
            <Link to="/signin">
              <button className="btn" >Sign in</button>
            </Link>
            <Link to="/register">
              <button>Get Started</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Menu
