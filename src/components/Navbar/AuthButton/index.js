import React from 'react'
import './styles.css'
const AuthButton = () => {
  return (
    <div className='nav-auth'>
        <button className='auth-btn'>
            Login
        </button>
        <button className='auth-btn'>
            Signup
        </button>
    </div>
  )
}

export default AuthButton