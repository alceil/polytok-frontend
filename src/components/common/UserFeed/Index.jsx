import {React,useEffect} from 'react'
import PostCard from '../PostCard'
import './styles.module.css'
import { useSelector,useDispatch } from "react-redux";
import { fetchPosts } from '../../../redux/slices/posts.slice';
const UserFeed = ({user_id}) => {
  const dispatch = useDispatch();
console.log(user_id)
  useEffect(() => {
dispatch(fetchPosts({user_id}))
  }, [dispatch,user_id]);

  
  const {posts} = useSelector((state) => state.post);
  return (
    <div className='feed'>


      {
        posts && 
          posts.map((post, index) => (
            <div key={post._id}>
          <PostCard 
          postData={post}
/> 
            </div>
          ))
        }     
      </div>
  )
}

export default UserFeed