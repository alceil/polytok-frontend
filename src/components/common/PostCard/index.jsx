import React ,{useState}from 'react'
import Avatar from '../Avatar'
import style from './styles.module.css'
import {
  MdBookmarkBorder,
  MdBookmark,
} from "react-icons/md";
import {
  FiCornerDownLeft,
  FiMessageSquare,
} from "react-icons/fi";

import {
  AiFillHeart,
  AiOutlineHeart
} from "react-icons/ai";
import { getFullName } from '../../../utils/common';
import { useDispatch, useSelector } from 'react-redux';
import { UndoBookmarkPost,BookmarkPost } from '../../../redux/slices/users.slice';
import { LikePost, UnLikePost, addComment } from '../../../redux/slices/posts.slice';
const PostCard = ({ postData}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const {title,imageUrl,description,author,_id,likes,comments} = postData;
  const {username,profilePic,_id:userId} = author
  const {bookmarks} =user;
  const defaultComment = {
    content: "",
    username: "",
  };

  const [showCommentEditor, setShowCommentEditor] = useState(false);
  const [showLike, setShowLike] = useState(false);
  const [comment, setComment] = useState(defaultComment);
const isLiked = likes?.find((user) => user === userId);
const isBookmarked = bookmarks?.some((bookmark) => bookmark?._id === _id);
  const likePost = ( e, postId, username) => {
    e.preventDefault();
    console.log("like called")
    dispatch(LikePost({postId, username}))
  }

  const unlikePost = (e, postId, username) => {
    e.preventDefault();
    console.log("unlike called")
    dispatch(UnLikePost({postId, username}))
  }

  const undoBookmarkPost = (e, postId) => {
    e.preventDefault();
    console.log("undoBookmarkPost")
    dispatch(UndoBookmarkPost({postId}))
  }

  const bookmarkPost = (e, postData) => {
    e.preventDefault();
    console.log(postData)
    console.log("bookmarkPost")
    console.log(username)
    dispatch(BookmarkPost({postData}))
  }

  const handleComment = async (e) => {
    e.preventDefault();
    dispatch(addComment({...comment,id:_id}))
    setComment(defaultComment);
  };
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
style={{border:'none',backgroundColor:'#fff'}} onClick={(e) => 
  {isLiked?unlikePost(e,_id,username):likePost(e,_id,username)}

}
   >
 {isLiked?
 (
 <AiFillHeart color='red' 
 onClick={(e)=>{unlikePost(e,_id,username)}}
/>
 ):(
 <AiOutlineHeart 
 onClick={(e)=>{likePost(e,_id,username)}}
 />
 )
 } 
</button>
<button 
style={{border:'none',backgroundColor:'#fff'}}
onClick={() => {setShowCommentEditor(!showCommentEditor)}}>
<FiMessageSquare />
</button>



{isBookmarked ? (
          <button
          style={{border:'none',backgroundColor:'#fff'}}
            onClick={(e) => undoBookmarkPost(e,_id,username)}
          >
            <MdBookmark />
          </button>
        ) : (
          <button
          style={{border:'none',backgroundColor:'#fff'}}
            onClick={(e) => bookmarkPost(e,postData)}
          >
            <MdBookmarkBorder />
          </button>
        )}


</div>
<p  style={{backgroundColor:'white',position:'relative',bottom:'12px',fontSize:'.5rem'}}>
            {isLiked
              ? likes?.length > 1
                ? `You and ${likes?.length - 1} others liked this`
                : "You liked this"
              : likes?.length > 1
              ? `${likes[0]?.displayName} & ${
                  likes?.length - 1
                } other liked this`
              : likes?.length
              ? `${likes[0]?.displayName} liked this`
              : "Be the first one to like this"}
          </p>
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
            onChange={(e) => {
              setComment({
                ...comment,
                id:_id,
                content: e.target.value,
                username: username,
              });
            }}
            placeholder="Have any thoughts on this?"
          />

          <button
          style={{border:'none',
          backgroundColor:'#3e2ed9',
          color:'white',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
        }}
          onClick={(e)=>{handleComment(e)}}
          >
         <FiCornerDownLeft/>
          </button>
 </div>
}
{
  showCommentEditor && comments?.map(({profilePic,firstname,content}=comment) => (
    <div
    style={{
  display:'flex',
  width:'52rem',
  flexDirection:'column',
  justifyContent:'space-between',
  position:'relative',
  backgroundColor: '#ffff',
  borderRadius: '1rem',
  padding:'1rem',
  margin:'12px'
    }}
    >
     <div className={style.author_details}> 
   <Avatar
          className={style.comment_avatar}
          src={profilePic}
          alt='profilepic'
          />
  
  <div style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'10px'}}>
    <h6 style={{padding:'0px',margin:'0px'}}>{getFullName(author)}</h6>
    <span style={{position:'relative',right:'10px',fontSize:'12px'}}>@{username}</span>
</div>
</div>   
  <div style={{position:'relative',left:'3rem',bottom:'.3rem'}}>
    {content}
  </div>
           
   </div>
  ))}

      

    </div>

  )
}

export default PostCard