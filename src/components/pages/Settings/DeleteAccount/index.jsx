import React from 'react'
import './styles.css'
import { MdDelete } from 'react-icons/md';
import Button from '../../../common/Button'
import { useSelector } from "react-redux";
const DeleteAccount = () => {
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  return isUserLoggedIn?(
     <div className='delete-account-card'>
      <div className='delete-account-card-top'>
<h3>Account deletion</h3>
<p>Once you delete your account, there is no going back. Please be certain.</p>
      </div>
      <Button className='delete-account-btn'>
        <div className='icon'>
        <MdDelete />
        </div>
        <span>
        Delete Account

        </span>

      </Button>
    </div>
  ):null
}

export default DeleteAccount