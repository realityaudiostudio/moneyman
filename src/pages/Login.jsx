import React, { useContext } from 'react'
import './login.css';
import Moneyimg from '../img/mny.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UserContext } from '../context/UserContext';


function Login() {
  const {user} = useContext(UserContext);
    const[userName,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState(false);
    const navigate = useNavigate();
    // const [logins,setLogins] = useState([]);

    function usrNme(e)
    {
      setUsername(e.target.value);
    }
    function psWr(e){
      setPassword(e.target.value);
    }

    function handleLogins()
    {
      if(userName === user?.userName && password === user?.password)
        {
          navigate('/welcome');
        }
        else{
          setError(true)
        }
    }

  return (
    <div className="auth">
   <div className="ezhuthukal">
    <h2>Login</h2>
    <p>How Do I Get Started</p>
    <div className="petty">
        <input type="email" onChange={usrNme} name="email" id="eml" placeholder="Enter ur Username Address"/>
        <input type="password" onChange={psWr} id="pswd" placeholder="Enter Your Password"/>
    </div>
    <p style={{marginLeft:34}}>Forgot Password?</p>
    <button className="keru" onClick={handleLogins}>Login</button>
    <Link to='/signup'><button className="erangu">Signup</button></Link>
    {error === true && <p>Password incorrect</p>}
   </div>
   <div className="padangal">
    <img src={Moneyimg} alt="money"></img>  
   </div> 
</div>
  )
}

export default Login