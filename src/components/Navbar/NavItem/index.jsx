import React from 'react'
import './styles.css'
const NavItem = ({icon,name}) => {
  return (
    <div className='nav-item'>
       <div className='icon'>{icon}</div>
      <span>{name}</span>
    </div>
  )
}

export default NavItem