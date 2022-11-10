import React from 'react'
import Avatar from '../Avatar'
import style from './styles.module.css'
const PostCard = ({title,imageUrl,description}) => {
  return (
    <div className= {style.post_card}>
        <div className='post_card-top'>
<div className={style.author_details}>
<Avatar
        className='avatar'
        src={imageUrl}
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
<img 
className={style.post_image}
src={imageUrl} 
alt="post"  />
</div> 

 </div>

    </div>
  )
}

export default PostCard