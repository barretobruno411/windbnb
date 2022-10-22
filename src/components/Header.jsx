import React from 'react'
import "./Header.css"
import Logo from "./Logo"
import Navigation from "./Navgation"

const Header = ({data}) => {

  
  return (
    <header>
        <Logo />
        <Navigation data={data}/>
    </header>
  )
}

export default Header