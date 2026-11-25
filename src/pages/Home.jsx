import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <h2>Welcome to GitHub Explorer</h2>
        <p>Explore GitHub repositories and see their files</p>
        <Link to="/repos" className='button'>Repositories</Link>
    </div>
  )
}

export default Home