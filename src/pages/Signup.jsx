import React from 'react'
import { useState ,useContext } from 'react';
import './login.css';
import Moneyimg from '../img/mny.png';
import { Link,useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

function Signup() {
  const {updateUser} = useContext(UserContext);
  // const[loginn,setLoginn] = useState([]);
  const[name,setName]=useState('');
  const[userName,setUsername] = useState('');
  const[password,setPassword] = useState('');
  const[rePass,setRepass] = useState('');
  const[error,setError] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    if(password===rePass)
      {
    updateUser({name,userName,password,rePass});
    axios.post('http://localhost:4550/userdata', {
      name,
      userName,
      password
    })
    navigate('/login');//navigate to login

  }
  else{
    setError(true);
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
        <input type="password" onChange={rPs} id="repswd" placeholder="Re-Enter Your Password"/>
        
    </div>
    <p style={{marginLeft:34}}>Forgot Password?</p>
    <button className="keru" onClick={handleLogin}>Signup</button>
    <Link to='/login'><button className="erangu">Login</button></Link>
    {/* <p>Your Sweet Name is {loginn.name}</p>
    
    <p>Password is {loginn.password}</p>
    <p>The Repassword is {loginn.rePass}</p> */}
    {/* <p {error == true && <small>Timestamp: {data.substring(0, 10)}>Password Mismatch Found</p> */}
    {error === true && <p>Password Mismatch Found</p>}
   </div>
   <div className="padangal">
    <img src={Moneyimg} alt="money"></img>  
   </div> 
</div>
  )
}

export default Signup