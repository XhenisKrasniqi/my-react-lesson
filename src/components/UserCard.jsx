import React from 'react'

function UserCard({name, online}) {
  return (
    <div>
      <h3>{name}</h3>

      <p>{online ? "Online" : "Offline"}</p>
    </div>
  )
}

export default UserCard