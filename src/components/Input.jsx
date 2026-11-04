import React from 'react'

function Input({type, inputPlaceholder,value ,onChange}) {
  return (
    <>
        <input type={type} placeholder={inputPlaceholder} value={value} onChange={onChange}/>
    </>
  )
}

export default Input