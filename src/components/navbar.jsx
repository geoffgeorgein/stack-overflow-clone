import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
import './navbar.scss';
import search from '../assets/search-solid.svg';
import Avatar from './avatar';

const Navbar = () => {

  const User="nues";

  const handleLogout=()=>{

  }
  return (
    <div className='navbar'>

        <div className='nav-container'>

        
        <Link to={'/'} className='nav-item nav-btn'  > 
            <img src={logo} alt='logo' />
            
        </Link>
        <Link to={'/'} className='nav-item nav-btn'>About</Link>
        <Link to={'/'} className='nav-item nav-btn'>Products</Link>
        <Link to={'/'} className='nav-item nav-btn'> For Teams</Link>

        <form>
          <input type='text' placeholder='...search'></input>
          <img src={search} alt='search' width='18' className='search-icon'></img>
        </form>

        <div className="navbar-2">
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {/* {User.result.name.charAt(0).toUpperCase()} */}
                  M
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
        </div>

        </div>
        
        
    </div>
  )
}

export default Navbar