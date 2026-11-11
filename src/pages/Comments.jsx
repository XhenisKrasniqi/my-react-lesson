import React, { useEffect , useState } from 'react'



function Comments() {
  const [comments , setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(responsive => responsive.json())
    .then(data => setComments(data))
  })
  return (
    <div>
      <h1 className='title'>Comments</h1>
      <div className='cards'>
        {
          comments.map((comments) => (
          <div className='card' key={comments.id}>
          <h1>{comments.email}</h1>
          <p>{comments.name}</p>
          <p>{comments.body}</p>
          <br />
          </div>        
        ))}
      </div>
    </div>
  )
}

export default Comments