import React, { useState } from 'react'

function Checkbox() {
    const [accept, setAccept] = useState(false)
  return (
    <div>
        <input type="checkbox"
        onChange={(e) => setAccept(e.target.checked)}
        />
        <p>{accept ? "Accepted" : "Not accepted"}</p>
    </div>
  )
}

export default Checkbox