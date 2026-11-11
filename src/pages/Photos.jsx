import React, { useEffect , useState } from 'react'



function Photos() {
  const [photos , setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(responsive => responsive.json())
    .then(data => setPhotos(data))
  })
  return (
    <div>
      <h1 className='title'>Posts</h1>
      <div className='cards'>
        {
          photos.slice(0, 50).map((photos) => (
          <div className='card' key={photos.id}>
          <p>{photos.title}</p>
          <img src={photos.url} alt="" />
          <br />
          </div>        
        ))}
      </div>
    </div>
  )
}

export default Photos