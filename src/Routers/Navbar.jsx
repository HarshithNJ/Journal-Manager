import React from 'react'
import "./styles/navbar.css"
import logo from './images/logo.png'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div id="head">
          <div id="logo">
            <img src={logo} alt="Journal" />
          </div>
          <ul>
            <Link to="/view"><li>Journals</li></Link>
            <Link to="/add"><li>Add Journal</li></Link>
          </ul>
        </div>
        <div id="btns">
          <Link to="/register"><button>Register</button></Link>
          <Link to="/login"><button>Login</button></Link>
        </div>
      </div>

      <div className='display'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Navbar