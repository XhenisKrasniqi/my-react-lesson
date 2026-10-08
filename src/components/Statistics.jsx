import React from 'react'
import StatCard from './StatCard'

function Statistics() {
  return (
    <div className='statistics'>
        <StatCard
            title="total students"
            value={20}
            color="blue"
             stat={20}
        />
        <StatCard
            title="total teachers"
            value={50}
            color="green"
             stat={10}
        />
        <StatCard
            title="total class"
            value={50}
            color="orange"
            stat={40}
        />
        <StatCard
            title="total students"
            value={40}
            color="yellow"
            stat={50}
        />
    </div>
  )
}

export default Statistics