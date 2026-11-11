import React, { useEffect , useState } from 'react'

function Posts() {
  const [posts , setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(responsive => responsive.json())
    .then(data => setPosts(data))
  })
  return (
    <div>
      <h1 className='title'>Posts</h1>
      <div className='cards'>
        {
          posts.map((posts) => (
          <div className='card' key={posts.id}>
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
          <br />
          </div>        
        ))}
      </div>
    </div>
  )
}

export default Posts