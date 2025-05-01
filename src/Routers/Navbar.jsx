import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li>Journals</li>
          <li>Add Journal</li>
        </ul>
        <div id="btns">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar