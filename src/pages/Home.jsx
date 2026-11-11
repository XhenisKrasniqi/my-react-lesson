import { useEffect , useState } from 'react'
import { Link  } from 'react-router-dom'
function Home() {
    const [posts, setPosts] = useState([])
    const [photos, setPhotos] = useState([])
    const [comments, setComments] = useState([])    

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data))
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => setComments(data))
  }, [])



  return (
    <div className='home'>
      <h1>Home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sint autem inventore qui libero ut aspernatur distinctio atque odit incidunt recusandae, nesciunt fugiat accusamus assumenda provident eveniet rerum eius tempore! Illo quibusdam, assumenda magni officiis facere deserunt officia reiciendis illum suscipit eum ut? Laudantium quaerat qui vitae obcaecati minima iste velit culpa odit accusamus quisquam voluptatibus et similique consequatur ducimus saepe inventore quo in eius atque sed reiciendis, molestiae mollitia facilis. Quam, sapiente autem. Eveniet suscipit maxime velit officiis sequi perspiciatis vitae eius! Qui quod doloremque rerum minima aliquam in voluptas, saepe consequuntur itaque minus velit! Repellendus temporibus ipsum qui?</p>
      <div>
        <div className="home-card">
          <Link to="/posts">
            <h2>Posts</h2>
            <p>{posts.length}</p>
          </Link>

        </div>
        <div className="home-card">
          <Link to="/photos">
            <h2>Photos</h2>
            <p>{photos.length}</p>
          </Link>
        </div>
        <div className="home-card">
          <Link to="/comments">
            <h2>Comments</h2>
            <p>{comments.length}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home