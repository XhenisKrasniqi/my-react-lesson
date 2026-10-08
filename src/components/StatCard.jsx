import React from 'react'

function StatCard({title, stat, value, color}) {
  return (
    <div className={`stat-card ${color}`}>
        <p>{title}</p>
        <h1>{stat}</h1>
        <p>{value}</p>

    </div>
  )
}

export default StatCard