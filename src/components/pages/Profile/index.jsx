import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import IconButton from '../../common/IconButton';
import UserFeed from '../../common/UserFeed'
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
    <UserFeed/>
    </div>


  )
}

export default Profile