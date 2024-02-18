import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
         <div className='logo'>
           <span style={{color:"red", fontSize:"30px", fontWeight:"bold"}}>O</span><span style={{color:"green", fontSize:"30px", fontWeight:"bold"}}>M</span><span style={{color:"blue", fontSize:"30px", fontWeight:"bold"}}>D</span><span style={{color:"ocan", fontSize:"30px", fontWeight:"bold"}}>D</span>
          </div>
        <div className='nav'>
           <p>Home</p>
           <p>About</p>
           <p>Contact</p>
           <p>Users</p>
        </div>
    </div>
  )
}

export default Navbar