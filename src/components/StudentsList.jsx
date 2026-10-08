import React from 'react'
import Students from './Students'

function StudentsList() {
  return (
    <div className='student-grid'>
        <Students
        photo="https://picsum.photos/200/300
" 
        name = "Xhenis Krasniqi"
        title = "Full Stack"
        grade = {10}
        result = "Passed"
        project = {12}
        progress = {98}
        />
        <Students
        photo="https://picsum.photos/200/300
" 
        name = "Hana Krasniqi"
        title = "Back End"
        grade = {4}
        result = "Failed"
        project = {9}
        progress = {88}
        />
        <Students
        photo="https://picsum.photos/200/300
" 
        name = "Zana Krasniqi"
        title = "Front End"
        grade = {9}
        result = "Passed"
        project = {7}
        progress = {67}
        />
    </div>
  )
}

export default StudentsList