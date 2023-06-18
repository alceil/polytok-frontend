import React from 'react'
import './styles.css'
import { FiArrowLeft } from 'react-icons/fi';
import IconButton from '../../common/IconButton';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import PostCard from '../../common/PostCard';
const BookMarks = () => {
  const user = useSelector((state) => state.user.user);
  const {bookmarks} = user;
  const navigate = useNavigate();
  return (
    <div className='page'>
        <div className='page-back'>
        <IconButton className={'back-btn'} onClick={()=>navigate(-1)}>
            <FiArrowLeft/>
        </IconButton>
        <h2>Bookmarks</h2>
    </div>
    {bookmarks.length > 0 ? (
        <div className='bookmarks'>
          {bookmarks.map((bookmark, index) => (
            <div key={bookmark._id}>
            <PostCard 
            postData={bookmark}
  /> 
              </div>
          ))}
        </div>
      ) : (
        <p style={{  textAlign: 'center'}}>No bookmarks found.</p>
      )}
    </div>
  )
}

export default BookMarks