import React from 'react'
import './styles.css'
import { useNavigate,useMatch } from 'react-router-dom';
import {useProtectedFunction} from '../../../hooks/useProtectedFunction';
const NavItem = ({icon,name,isLoginRequired,route}) => {
  const navigate = useNavigate();
  const protectFunction = useProtectedFunction();

  const handleClick = () => navigate(route);
  const isLinkActive = useMatch({ path: route, exact: true });
  const protectedHandleClick = protectFunction(handleClick);
  return (
    <div 
    role="link"
    tabIndex={0}
    aria-label={name}
    className={`nav-item  ${isLinkActive ? 'active-nav-item' : ''}`}
    onClick={isLoginRequired ? protectedHandleClick : handleClick}
    >
       <div className='icon'>{icon}</div>
      <span>{name}</span>
    </div>
  )
}

export default NavItem