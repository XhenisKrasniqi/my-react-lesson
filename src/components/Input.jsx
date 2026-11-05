import React from 'react'

function Input({type, inputPlaceholder,value ,onChange}) {
  return (
    <>
        <input type={type} placeholder={inputPlaceholder} value={value} onChange={onChange}/>
    </>
import React, { useState } from 'react'

function Input() {
    const [name, setName] = useState();
  return (
    <div>
        <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <p>name: {name}</p>
    </div>
  )
}

export default Input