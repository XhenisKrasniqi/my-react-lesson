import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
return (
<div className='home'>
<h2>Welcome to My Projects</h2>
<p>Explore my projects</p>
<Link to="/projects" className='button'>Projects</Link>
</div>
)
}

export default Home