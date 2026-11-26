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
  return (
    <div className='home'>
        <h2>Welcome to GitHub Explorer</h2>
        <p>Explore GitHub repositories and see their files</p>
        <Link to="/repos" className='button'>Repositories</Link>
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