import React from 'react'
import Button from '../../../common/Button'
import './styles.css'
const FollowRow = ({username,designation}) => {
  return (
    <div className='follow-row'>
        <div className='follow-row-left'>
<h4>{username}</h4>
<span>{designation}</span>
        </div>

        <div className='follow-row-right'>
            <Button className='follow-btn'>
                Follow
            </Button>
</div>

    </div>
  )
}

export default FollowRow