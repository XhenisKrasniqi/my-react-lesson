import React from 'react'

function Students({photo, name, title, grade, result, project, progress}) {
  return (
    <div className='student-card'>
        <div className='student-header'>
            <div>
                <img className='avatar' src={photo} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <h3>{title}</h3>
            </div>
            <div>
                <h2>Absent</h2>
            </div>
        </div>
        <div className='second-part'>
            <div>
                <p>Grade</p>
                <p>{grade}</p>
            </div>
            <div>
                <p>Result</p>
                <p>{result}</p>
            </div>
            <div>
                <p>Project</p>
                <p>{project}</p>
            </div>
        </div>
        <div className='third-part'>
            <p>Course progress</p>
            <p>{progress}</p>
        </div>
        <div className='fourth-part'>
            <button>Mark Present</button>
            <button>Details</button>
        </div>
    </div>
  )
}

export default Students