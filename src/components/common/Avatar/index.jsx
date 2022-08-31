import React from 'react'
import './styles.css'
const Avatar = ({src,alt,className}) => {
  return (
<img 
  src={src} 
  alt={alt} 
  className={`avatar ${className}`} />
  )
}

export default Avatar