import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import IconButton from '../../common/IconButton';
import UserFeed from '../../common/UserFeed'
import './styles.css'
import {  useSelector } from "react-redux";
import UserProfile from './UserProfile';
const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  return (
    <div className='page'>
        <div className='page-back'>
        <IconButton className={'back-btn'} onClick={() =>navigate}>
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