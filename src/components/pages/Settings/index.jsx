import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import IconButton from '../../common/IconButton';
import './styles.css'
import ThemeControl from './ThemeControl';
import DeleteAccount from './DeleteAccount';
const Settings = () => {
  return (
    <div className='page'>
        <div className='page-back'>
        <IconButton className={'back-btn'}>
            <FiArrowLeft/>
        </IconButton>
        <h2>Settings</h2>
    </div>
<ThemeControl/>
<DeleteAccount/>
    </div>
  )
}

export default Settings