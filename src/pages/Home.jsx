import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
      <div className='main'>
      <h1>Home</h1>
      <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto deserunt minus error est dolores ea voluptas. Velit asperiores vero tempora, est maxime ullam tempore molestias? Doloremque unde ab expedita nisi excepturi rerum nesciunt perferendis qui, vero eos consequuntur impedit accusantium soluta earum minus nostrum fugit. Autem saepe enim totam?</h3>
      <button>
      <Link to='/courses'>Go to corses for more</Link>   
      </button>
    </div>
  )
}

export default Home