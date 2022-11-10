import React from 'react'
import FollowRow from './FollowRow'
import './styles.css'
const FollowCard = () => {
  return (
    <div className='follow-card'>
        <h1>People to Follow</h1>
<FollowRow
username="alceil"
designation="ceo kindify"
/>
    </div>
  )
}

export default FollowCard