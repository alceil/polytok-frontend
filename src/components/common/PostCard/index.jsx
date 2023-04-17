import React ,{useState}from 'react'
import Avatar from '../Avatar'
import style from './styles.module.css'
import {
  // MdBookmarkBorder,
  // MdBookmark,
} from "react-icons/md";
import {
  // FiChevronDown,
  // FiChevronUp,
  FiCornerDownLeft,
  FiBookmark,
  FiMessageSquare,
  FiHeart,

} from "react-icons/fi";
import { getFullName } from '../../../utils/common';
const PostCard = ({ postData}) => {
  const {title,imageUrl,description,author} = postData;
  const {username,profilePic} = author
  const defaultComment = {
    content: "",
    userName: "",
    avatarUrl: "",
    date: "",
  };

  const [showCommentEditor, setShowCommentEditor] = useState(false);
  const [comment, setComment] = useState(defaultComment);
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <div className= {style.post_card}>
        <div className='post_card-top'>
<div className={style.author_details}>
<Avatar
        className='avatar'
        src={profilePic}
        alt='profilepic'
        />
<div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'10px'}}>
    <h6 style={{padding:'0px',margin:'0px'}}>{getFullName(author)}</h6>
    <span style={{position:'relative',right:'10px',fontSize:'12px'}}>@{username}</span>
</div>      
</div>
<div className={style.post_card_middle}>
    <h2 style={{margin:'0px'}}>{title}</h2>
    <p style={{marginTop:'0px'}}>{description}</p>

{
imageUrl && <img 
className={style.post_image}
src={imageUrl} 
alt="post"  />
}

</div> 
<div className={style.post_card_bottom}>
<button 
style={{border:'none',backgroundColor:'#fff'}}>
  <FiHeart/>
</button>
<button 
style={{border:'none',backgroundColor:'#fff'}}
onClick={() => {setShowCommentEditor(!showCommentEditor)}}>
<FiMessageSquare />
</button>
<button
style={{border:'none',backgroundColor:'#fff'}}
>
  <FiBookmark/>
</button>
</div>

 </div>
    </div>
    {
  showCommentEditor && 
  <div
  style={{
display:'flex',
alignItems:'center',
width:'52rem',
justifyContent:'space-between',
position:'relative',
backgroundColor: '#ffff',
borderRadius: '1rem',
padding:'1rem',
margin:'12px'
  }}
  >
 <Avatar
        className='avatar'
        src={profilePic}
        alt='profilepic'
        />
  <textarea
            type="text"
            name="newPost"
            rows="5"
            value={comment.content}
            style={{
              border:'none',
              backgroundColor:'#F9FAFB',
              resize:'none',
              width:'30rem',
              outline:'none'

            }}
            // onChange={(e) => {
            //   setComment({
            //     ...comment,
            //     id:_id,
            //     content: e.target.value,
            //     displayName: user?.displayName,
            //     avatar: user?.avatar || defaultAvatar,
            //     username: user?.username,
            //     date: new Date().toLocaleString(),
            //   });
            // }}
            placeholder="Have any thoughts on this?"
          />

          <button
          style={{border:'none',
          backgroundColor:'#3e2ed9',
          color:'white',
          borderRadius: '50%',
          width: '50px',
          height: '50px'
        
        }}
          >
         <FiCornerDownLeft/>
          </button>
 </div>
 }
    </div>

  )
}

export default PostCard