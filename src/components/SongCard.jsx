import React from 'react'


function SongCard({artist, title, favorite}) {
  return (
    <div>
        <h1>{title}</h1>
        <h2>Artist: {artist}</h2>
        <p>{favorite ? "Favorite" : "Not Favorite"}</p>

    </div>
  )
}

export default SongCard