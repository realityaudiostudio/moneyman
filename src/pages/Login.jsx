import React from 'react'
import './login.css';
import Moneyimg from '../img/mny.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="auth">
   <div className="ezhuthukal">
    <h2>Login</h2>
    <p>How Do I Get Started</p>
    <div className="petty">
        <input type="email" name="email" id="eml" placeholder="Enter ur Email Address"/>
        <input type="password" id="pswd" placeholder="Enter Your Password"/>
    </div>
    <p style={{marginLeft:34}}>Forgot Password?</p>
    <button className="keru">Login</button>
    <Link to='/signup'><button className="erangu">Signup</button></Link>
   </div>
   <div className="padangal">
    <img src={Moneyimg} alt="money"></img>  
   </div> 
</div>
  )
}

export default Login