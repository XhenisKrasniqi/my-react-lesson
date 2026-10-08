import React, { useState } from 'react'

function Students({ photo, name, title, grade, result, project, progress }) {
  const [present, setPresent] = useState(false)

  return (
    <div className="student-card">

      <div className="student-header">
        <img className="avatar" src={photo} alt={name} />

        <div>
          <h2>{name}</h2>
          <p>{title}</p>
        </div>

        <div className={`status ${present ? 'present' : 'absent'}`}>
          {present ? 'Present' : 'Absent'}
        </div>
      </div>

      <div className="student-info">

        <div className="info-box">
          <p>Grade</p>
          <h3>{grade}</h3>
        </div>

        <div className="info-box">
          <p>Result</p>
          <h3 className={grade >= 5 ? 'passed' : 'failed'}>
            {result}
          </h3>
        </div>

        <div className="info-box">
          <p>Project</p>
          <h3>{project}</h3>
        </div>

      </div>

      <div className="info-box">
        <p>Course Progress</p>
        <h3>{progress}%</h3>
      </div>
<div className='button-part'>
        <button
        className="attendance-button"
        onClick={() => setPresent(!present)}
      >
        {present ? 'Mark Absent' : 'Mark Present'}
      </button>
    <button
        className="details-button"
      >
        Details
      </button>  
</div>


    </div>
  )
}

export default Students


