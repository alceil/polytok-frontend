import React from 'react'
import './Button.css'
const Button = ({children,className,...props}) => {
  return (
    <button className={`btn ${className}`} {...props}>
{children}
    </button>
  )
}

export default Button