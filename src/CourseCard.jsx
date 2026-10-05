import React from 'react'

function CourseCard({title, instructor, duration, price}) {
  return (
    <div>
        <h1>{title}</h1>
        <h2>Instructor: {instructor}</h2>
        <h2>Duration: {duration}</h2>
        <h2>Price: {price}</h2>

    </div>
  )
}

export default CourseCard