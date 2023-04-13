import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';
import {useProtectedFunction} from '../../../hooks/useProtectedFunction';
const NavItem = ({icon,name,isLoginRequired,route}) => {
  const navigate = useNavigate();
  const protectFunction = useProtectedFunction();

  const handleClick = () => navigate(route);
  const protectedHandleClick = protectFunction(handleClick);
  return (
    <div 
    className='nav-item'
    onClick={isLoginRequired ? protectedHandleClick : handleClick}
    >
       <div className='icon'>{icon}</div>
      <span>{name}</span>
    </div>
  )
}

export default NavItem