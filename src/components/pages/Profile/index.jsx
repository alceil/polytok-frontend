import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';
import IconButton from '../../common/IconButton';
import UserFeed from '../../common/UserFeed'
import './styles.css'
import {  useSelector } from "react-redux";
import UserProfile from './UserProfile';
const Profile = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className='page'>
        <div className='page-back'>
        <IconButton className={'back-btn'}>
            <FiArrowLeft/>
        </IconButton>
        <h2>Profile</h2>
    </div>
    <UserProfile/>
    <UserFeed user_id={user._id}/>
    </div>


  )
}

export default Profile