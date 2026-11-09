import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='main'>
      <h1>Contact</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi adipisci placeat accusantium!</h3>
      <button>
      <Link to='/About'>Go to About us for more</Link>   
      </button>
    </div>
  )
}

export default Contact