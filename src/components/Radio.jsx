import React, { useState } from 'react'

function Radio() {
    const [gender , setGender] = useState("")
  return (
    <div>
        <input
            type="radio"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
        />
            Male
        <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
            />
            Female

            <p>{gender ? gender : "Not selected"}</p>
    </div>
  )
}

export default Radio