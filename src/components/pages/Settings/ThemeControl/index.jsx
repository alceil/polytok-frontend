import React from 'react'
import IconButton from '../../../common/IconButton'
import { FaMoon, FaSun } from 'react-icons/fa';
import './styles.css'
const ThemeControl = () => {
  return (
    <div className='theme-control-card'>
        <div className='dark-mode-control'>
            <h3>Dark Mode</h3>
            <div className='button-grp'>
                <IconButton className='dark-mode-toggle-btn'>
<FaMoon/>
                </IconButton>
                <IconButton className='dark-mode-toggle-btn'>
                    <FaSun/>
                    
                </IconButton>
            </div>

        </div>
    </div>
  )
}

export default ThemeControl