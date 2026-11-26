import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
return (
<div className='navbar'>
<h2>My Project</h2>
<div>
<Link to="/">Home</Link>
<Link to="/projects">Projects</Link>
</div>
</div>
)
}

export default Navbar