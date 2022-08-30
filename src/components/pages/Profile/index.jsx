import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import IconButton from '../../common/IconButton';
import './styles.css'
import UserProfile from './UserProfile';
const Profile = () => {
  return (
    <div className='page'>
        <div className='page-back'>
        <IconButton className={'back-btn'}>
            <FiArrowLeft/>
        </IconButton>
        <h2>Profile</h2>
    </div>
    <UserProfile/>
    </div>


  )
}

export default Profile