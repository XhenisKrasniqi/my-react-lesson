import React from 'react'

function Proportie({proportieName , proportieSize , proportieAvilable}) {
  return (
    <div>
        <h1>{proportieName}</h1>
        <p>Size: {proportieSize}</p>
        <p>Available: {proportieAvilable ? "Yes" : "No"}</p>    
    </div>
  )
}

export default Proportie