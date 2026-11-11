import React from 'react'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link>

      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/comments">Comments</Link>
      </div>
    </nav>
  )
}

export default Header