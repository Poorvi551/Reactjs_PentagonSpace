import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="right">Logo</div>
        <div className="left">
            <Link to={"/"}><h3>Home</h3></Link>
            <Link to={"/profile"}><h3>Profile</h3></Link>
            <Link to={"settings"}><h3>Settings</h3></Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
