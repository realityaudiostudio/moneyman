import './navbar.css';
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div className='navbar'>
                <h1 className='headd'>Jyothi</h1>
        <div className='linker'>
            <a className='pova' href='#index'>Academics</a>
            <a className='pova' href='#index'>Culturals</a>
            <a className='pova' href='#index'>Departments</a>
            <a className='pova' href='#index'>Contact</a>
        </div>
        {/* <button type="button" className='log'>Login</button> */}
        <Link to="/login"><button className='log'>Login</button></Link>
        
    </div>
  )
}

export default Navbar