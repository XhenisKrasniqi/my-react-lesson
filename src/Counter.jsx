import React, { useState } from 'react'

function Counter() {
    const [count, setcount]= useState(0);
  return (
    <div>
        {count}
        <button onClick={() => count < 10 && setcount(count + 1)}>+</button>
        <button onClick={()=>setcount(count - 1)}>-</button>
        <button onClick={()=>setcount(0)}>Reset</button>
        {count > 10 && <p>The limit is 10</p>}

    </div>
  )
}

export default Counter