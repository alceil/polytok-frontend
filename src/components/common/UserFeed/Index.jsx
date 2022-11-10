import {React,useEffect} from 'react'
import PostCard from '../PostCard'
import './styles.module.css'
import { useSelector,useDispatch } from "react-redux";
import { fetchPosts } from '../../../redux/slices/posts.slice';
const UserFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
dispatch(fetchPosts())
  }, [dispatch]);

  
  const {posts} = useSelector((state) => state.post);
  return (
    <div className='feed'>


      {
        posts && 
          posts.map((post, index) => (
            <div key={post._id}>
          <PostCard 
title={post.title} 
imageUrl={post.imageUrl}
description={post.description}
/> 
            </div>
          ))
        }     
      </div>
  )
}

export default UserFeed