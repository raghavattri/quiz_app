import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Score = () => {
  const score = useSelector((state) => state.questions.score)
  return (
    <div className='score'>
      <Link to="/" className='link'>Home</Link>
      <p>Your Score: {score}</p>
    </div>
  )
}

export default Score