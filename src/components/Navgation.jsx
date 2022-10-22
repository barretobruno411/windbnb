import React from 'react'
import "./Navigation.css"
const Navgation = ({data}) => {

  console.log(data[0]["city"])
  
  return (
    <nav className="search-bar">
      <div>{data[0]["city"]}</div>
      <div>Add guest</div>
      <div>Lupa</div>
    </nav>
  )
}

export default Navgation