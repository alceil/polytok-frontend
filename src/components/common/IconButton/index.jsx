import React from 'react'
import './styles.css'
const IconButton = ({children,label,className,...props}) => {
  return (
    <button aria-label={label} className={`icon-btn ${className}`} {...props}>
{children}
    </button>
  )
}

export default IconButton