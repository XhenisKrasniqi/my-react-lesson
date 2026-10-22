import React from 'react'

function QuizResult({name, correctAnswers, totalQuestions}) {
  return (
    <div>
        <h3>{name}</h3>
        <p>Correct answers: {correctAnswers}</p>
        <p>Total questions: {totalQuestions}</p>
        <p>
            {correctAnswers >= 8
            ? "Excellent"
            : correctAnswers >= 5
            ? "Good"
            : "Try Again"}
        </p>
    </div>
  )
}

export default QuizResult