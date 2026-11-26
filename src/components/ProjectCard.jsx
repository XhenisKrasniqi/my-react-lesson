import React from 'react'


function ProjectCard({ project }) {
  return (
    <div className='project-card'>
      <img src={project.thumbnail} alt={project.title} />

      <h2>{project.title}</h2>

      <p>{project.description}</p>

      <p>Price: ${project.price}</p>

      <p>Rating: ⭐ {project.rating}</p>

      <p>Category: {project.category}</p>
    </div>
  )
}

export default ProjectCard
