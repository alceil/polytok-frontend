import React from 'react'
import Avatar from '../../../common/Avatar'
import Button from '../../../common/Button'
import AddContentModal from '../PostContent/AddContentModal'
import  './PostContent.css'
import { useState } from "react";
import { useSelector } from "react-redux";
import {useProtectedFunction} from '../../../../hooks/useProtectedFunction'
import placeholderImage from '../../../../assets/images/placeholder_profile_picture.png'
const PostContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openAddContentPopup = ()=> setIsModalOpen(true);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const user = useSelector((state) => state.user.user);
  const {profilePic} =user
  const [content, setContent] = useState('');
  const protectFunction = useProtectedFunction();
  const openAddQuestionPopup = protectFunction(() => setIsModalOpen(true));

  const handleContentChange = protectFunction((e) => {
    const newContent = e.target.value;
    setContent(newContent);

    if (newContent.length > 50) {
      openAddQuestionPopup();
    }
  });
  return (
    <div className='post-content'>
      <div className='input-group'>
      <Avatar
        className='avatar'
        src={isUserLoggedIn?profilePic:placeholderImage}
        alt='profilepic'
        />
        <input
                placeholder="Whats on your mind?"
                value={content}
                type="text"
                style={{
                  outline:'none'
                }}
                onClick={protectFunction(() => {})}
                onChange={handleContentChange}
              />
      </div>
     
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