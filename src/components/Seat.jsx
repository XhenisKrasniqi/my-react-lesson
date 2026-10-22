import React, { useState } from 'react'

function Seat({number}) {
    const [reserved, setReserved] = useState(false)
  return (
    <div>
        <p>Seat: {number}</p>
        <p>{reserved? "Reserved": "It's Available"}</p>

        <button onClick={() => setReserved(!reserved)}>
            {reserved ? "Cancel Reservation" : "Reserve"}
        </button>
    </div>
  )
}

export default Seat