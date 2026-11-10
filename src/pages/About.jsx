import { Link } from 'react-router-dom'
import React from 'react'

function About() {
  return (
      <div className='main'>
      <h1>About us</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi adipisci placeat accusantium!</h3>
      <button>
      <Link to='/'>Go to home us for more</Link>   
      </button>
    </div>
  )
}

export default About