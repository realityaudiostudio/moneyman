import React from 'react'
import { useState } from 'react';
import './login.css';
import Moneyimg from '../img/mny.png';
import { Link } from 'react-router-dom';

function Signup() {
  const[loginn,setLoginn] = useState([]);
  const[name,setName]=useState('');
  const[userName,setUsername] = useState('');
  const[password,setPassword] = useState('');
  const[rePass,setRepass] = useState('');

  function handleLogin() {
    if(password==rePass)
      {
    setLoginn({name,userName,password,rePass});
  }
  else{
    alert("Signup failed bro !");
  }
  }
  function urName(e)
  {
    setName(e.target.value);
  }
  function usrNme(e)
  {
    setUsername(e.target.value);
  }
  function psWr(e)
  {
    setPassword(e.target.value);
  }
  function rPs(e)
  {
    setRepass(e.target.value);
  }
  return (
    
    <div className="auth">
   <div className="ezhuthukal">
    <h2>Signup</h2>
    <p>How Do I Get Started</p>
    <div className="petty">
    <input type="text" onChange={urName} name="name" id="name" placeholder="Enter your name"/>
        <input type="email" onChange={usrNme} name="email" id="eml" placeholder="Enter ur Email Address"/>
        <input type="password" onChange={psWr} id="pswd" placeholder="Enter Your Password"/>
        <input type="password" onChange={rPs} id="pswd" placeholder="Re-Enter Your Password"/>
        
    </div>
    <p style={{marginLeft:34}}>Forgot Password?</p>
    <button className="keru" onClick={handleLogin}>Signup</button>
    <Link to='/login'><button className="erangu">Login</button></Link>
    <p>Your Sweet Name is {loginn.name}</p>
    <p>Username is {loginn.userName}</p>
    <p>Password is {loginn.password}</p>
    <p>The Repassword is {loginn.rePass}</p>
   </div>
   <div className="padangal">
    <img src={Moneyimg} alt="money"></img>  
   </div> 
</div>
  )
}

export default Signup