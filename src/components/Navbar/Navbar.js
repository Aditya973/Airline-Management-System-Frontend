import React from 'react'
import './Navbar.css'
import { Button } from 'antd';

function Navbar() {
  return (
    <div className='container'>
      <div className="leftLayout">
        <div className="banner">
          <h2>My Flights</h2>
        </div>
        <nav className="navbar">
          <ul>
            <li>Search Flight</li>
            <li>Book Flight</li>
          </ul>
        </nav>
      </div>
      <div className="rightLayout">
        <Button className='btn'>Log In</Button>
        <Button className='btn'>Sign Up</Button>
      </div>
    </div>
  )
}

export default Navbar