import React, { useState } from 'react'

function Product({name}) {
    const [quantity, setQuantity] = useState(1)
    const price = 20
  return (
    <div>
        <h1>{name}</h1>
        <h2>Price: {price}$</h2>
        <h3>Quantity: {quantity}</h3>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <h3>Total: {price*quantity}$</h3>
    </div>
  )
}

export default Product