import React from 'react'

function users({users}) {
  return (
    <>
          {
        users.map((user) => (
          <div className='card' key={user.id}>
               <h1>{user.username}</h1>
    <p>{user.phone}</p>
    <p>{user.address.geo.lat}</p>
            <br />
          </div>        
        ))}

    </>
  )
}

export default users