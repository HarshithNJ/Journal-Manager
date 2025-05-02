import React from 'react'
import "./styles/navbar.css"
import logo from './images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div id="head">
          <div id="logo">
            <img src={logo} alt="Journal" />
          </div>
          <ul>
            <li>Journals</li>
            <li>Add Journal</li>
          </ul>
        </div>
        <div id="btns">
          <Link to="/register"><button>Register</button></Link>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar