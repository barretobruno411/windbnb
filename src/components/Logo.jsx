import React from 'react'
import logo from "../logo.png"
import "./Logo.css"

const Logo = () => {
  return (
    <div className='logo'>
      <img id="logo-img" src={logo} alt="winbnb-logo" />
    </div>
  )
}

export default Logo