import React from 'react'

function ProfileCard({name, age, city}) {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h2>{city}</h2>
    </div>
  )
}

export default ProfileCard