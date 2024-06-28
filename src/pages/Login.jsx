import React, { useContext, useState } from 'react'
import './login.css';
import Moneyimg from '../img/mny.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';


function Login() {
    const[userName,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState(false);
    const navigate = useNavigate();
    const {login} = useContext(UserContext);
    // const [logins,setLogins] = useState([]);

    function usrNme(e)
    {
      setUsername(e.target.value);
    }
    function psWr(e){
      setPassword(e.target.value);
    }

    async function handleLogins()
    {
      const response = await axios.post('http://localhost:4550/login',{
        userName,
        password
      })
      if(response.data.success === true)
        {
          // console.log(response.data.usr);
          login(response.data.usr);
          navigate('/welcome');
        }
        else{
          console.error('pani paali guys !',response.data.message)
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

export default Login;