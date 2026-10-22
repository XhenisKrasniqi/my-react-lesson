import React , { useState } from 'react'

function HabitCard({ title }) {
  const [completed, setCompleted] = useState(false);

  return (
    <div>
      <h3>{title}</h3>

      <p>{completed ? "Completed" : "Not Done"}</p>

      <button onClick={() => setCompleted(true)}>
        Mark Done
      </button>

      <button onClick={() => setCompleted(false)}>
        Reset
      </button>
    </div>
  );
}

export default HabitCard;
