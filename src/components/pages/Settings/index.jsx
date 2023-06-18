import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../common/IconButton';
import './styles.css'
import ThemeControl from './ThemeControl';
import DeleteAccount from './DeleteAccount';
const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className='page'>
        <div className='page-back'>
        <IconButton className={'back-btn'} onClick={()=>navigate(-1)}>
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