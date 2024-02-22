import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const handleTest = ()=>{
    navigate("/test")
  }
  return (
    <div className='home'>
      <button onClick={handleTest}  style={{cursor:'pointer'}}>
        Start Test
      </button>
    </div>
  )
}

export default Home