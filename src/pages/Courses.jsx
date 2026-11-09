import React from 'react'
import { Link } from 'react-router-dom'

function Courses() {
  return (
    <div className='main'>
      <h1>Courses</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi adipisci placeat accusantium!</h3>
      <button>
      <Link to='/contact'>Go to Contact us for more</Link>   
      </button>
    </div>
  )
}

export default Courses