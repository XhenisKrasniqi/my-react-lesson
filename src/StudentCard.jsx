import React, { useState } from 'react'

function StudentCard({name, course}) {
      const [present, setPresent] = useState(false);
    
  return (
    <div>
        <h1>{name}</h1>
        <h2>{course}</h2>
        <p>Status: {present ? 'Present' : 'Absent'}</p>
        <button onClick={() => setPresent(!present)}>Atendance</button>
    </div>
  )
}

export default StudentCard