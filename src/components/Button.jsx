import React from 'react'

function Button({buttonName , buttonType}) {
  return (
    <>
        <button type={buttonType}>{buttonName}</button>
    </>
  )
}

export default Button