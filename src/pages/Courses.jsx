import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Courses</h1>

      <Link to='/'>
        <button>Go to home</button>
      </Link>
    </div>
  )
}

export default Home