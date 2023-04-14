import React from 'react'
import UserFeed from '../../common/UserFeed'
import PostContent from './PostContent'

const Home = () => {
  return (
    <div className='home'>
    <PostContent/>
<UserFeed/>
    </div>

  )
}

export default Home