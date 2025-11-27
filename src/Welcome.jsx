import React from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate();

  // setTimeout(() => {
  //   navigate("/")
  // }, 4000)
  return (
    <div id='welcome'>

      <h3 >
        Course registered Successfully!
        The details of onboarding will be updated soon via E-mail.
      </h3>
      <h1>Welcome to the team🎉</h1>
    </div>
  )
}

export default Welcome
