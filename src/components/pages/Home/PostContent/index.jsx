import React from 'react'
import Avatar from '../../../common/Avatar'
import Button from '../../../common/Button'
import AddContentModal from '../PostContent/AddContentModal'
import  './styles.css'
import { useState } from "react";
import { useSelector } from "react-redux";
import placeholderImage from '../../../../assets/images/placeholder_profile_picture.png'
const PostContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openAddContentPopup = ()=> setIsModalOpen(true);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const user = useSelector((state) => state.user.user);
  const {profilePic} =user
  return (
    <div className='post-content'>
        <Avatar
        className='avatar'
        src={isUserLoggedIn?profilePic:placeholderImage}
        alt='profilepic'
        />
        <input
                placeholder="Whats on your mind?"
                type="text"
              />
              <Button className='post-btn' onClick={openAddContentPopup}>
                Post
              </Button>
              <AddContentModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              />
    </div>
  )
}

export default PostContent