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
  // FiCornerDownLeft,
  // FiEdit,
  FiMessageSquare,
  FiHeart,

} from "react-icons/fi";
const PostCard = ({post}) => {
  const {_id,title,imageUrl,description,avatarUrl} = post;
  const defaultComment = {
    content: "",
    userName: "",
    avatarUrl: "",
    date: "",
  };
  const [showCommentEditor, setShowCommentEditor] = useState(false);
  const [comment, setComment] = useState(defaultComment);
  return (
    <div className= {style.post_card}>
        <div className='post_card-top'>
<div className={style.author_details}>
<Avatar
        className='avatar'
        src={avatarUrl}
        alt='profilepic'
        />
<div>
    <h6>Ashish Tom</h6>
    <span>@alceil</span>
</div>      
</div>
<div className={style.post_card_middle}>
    <h2>{title}</h2>
    <p>{description}</p>

{
imageUrl && <img 
className={style.post_image}
src={imageUrl} 
alt="post"  />
}

</div> 
<div className={style.post_card_bottom}>
<button>
  <FiHeart/>
</button>
<button onClick={() => {setShowCommentEditor(!showCommentEditor)}}>
<FiMessageSquare />
</button>
<button>
  <FiHeart/>
</button>
</div>

 </div>
 
 {
  showCommentEditor && 
  <div>
 <Avatar
        className='avatar'
        src={avatarUrl}
        alt='profilepic'
        />
  <textarea
            type="text"
            name="newPost"
            rows="5"
            value={comment.content}
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
            // className=" mx-6 w-full resize-none whitespace-normal break-words  rounded-sm border-2 border-gray-50 bg-gray-50 px-3 focus:bg-gray-50 focus:outline-none"
          />
 </div>
 }
 

    </div>
  )
}

export default PostCard