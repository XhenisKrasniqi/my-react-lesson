import React from 'react'

function RepoCard({ repo }) {
  return (
    <div className='repo-card'>
      <h2>{repo.name}</h2>
      <p><a href="{repo.html_url}">{repo.html_url}</a></p>
    </div>
  )
}

export default RepoCard