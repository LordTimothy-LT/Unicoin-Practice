import React, {useState} from 'react'
import "./Home.css";
import Menu from '../Navigation/Menu';
import {FaBtc} from "react-icons/fa";
import phone from "../../Assets/img/phone.png";
import { IconContext } from "react-icons";
import Axios from 'axios';


const Home = () => {
  const [ email, setEmail] = useState([]);

  const baseUrl = "https://jsonplaceholder.typicode.com/posts"

  const postEmail = (e) => {
    e.preventDefault();
    Axios.post(baseUrl, {
      email
    }).then(res => console.log(res)).catch(err => console.log(err));
    setEmail("");
  } 

  return (
    <div>
      <Menu/>
      <div className="home">
        <div className="home_hero">
            <div className='home_hero_content'>
              <div className="home_hero_text">
              <IconContext.Provider value={{className: "btc" }}>
                <p><FaBtc/>Jump start your portfolio</p>
                </IconContext.Provider>
                <h2>Jump start Your <span>crypto</span> portfolio</h2>
                <h4>Unicoin is the easiest place to exchange your hard currency to crypto</h4>
              </div>
              <form className="home_form">
                  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <input type="button" value='Get Started' onClick={postEmail}/>
              </form>
            </div>
            <div className='home_hero_img'>
              <img src={phone}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
