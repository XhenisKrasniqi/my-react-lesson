
import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  const [search, setSearch] = useState('')
  const [project, setProject] = useState([])
  const [error, setError] = useState(null)

  const getProject = () => {
    setError(null)

    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }

        return response.json()
      })
      .then((data) => {
        setProject(data.products)
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  useEffect(() => {
    getProject()
  }, [])

  return (
    <div className="projects">
      <h1>Find Projects</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={getProject}>Search</button>
      </div>

      {error && <p>{error}</p>}

      <div className="project-grid">
        {project.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
