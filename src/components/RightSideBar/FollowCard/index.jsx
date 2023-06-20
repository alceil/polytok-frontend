import React from 'react'
import FollowRow from './FollowRow'
import './styles.css'
const FollowCard = () => {
  return (
    <div className='follow-card'>
        <h3>Trending Topics</h3>
<FollowRow
username="Movies"
designation="6 questions"
/>
<FollowRow
username="Movies"
designation="6 questions"
/>
<FollowRow
username="Movies"
designation="6 questions"
/>
    </div>
  )
}

export default FollowCard