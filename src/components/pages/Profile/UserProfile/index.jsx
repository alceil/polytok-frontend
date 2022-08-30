import React from 'react'
import Button from '../../../common/Button'
import { CgLogOut } from 'react-icons/cg';
import { useDispatch } from "react-redux"
import IconButton from '../../../common/IconButton';
import './styles.css'
import EditProfile from './EditProfile';
import { useSelector } from "react-redux";
import {  editprofilemodalopen } from '../../../../redux/actions/auth.action'
const UserProfile = () => {
  const dispatch = useDispatch();
  const isEditModalVisible = useSelector((state) => state.isEditModalVisible);

  const user = useSelector((state) => state.user);
  const editHandler = () => {
    console.log("edit pressed")
    dispatch(editprofilemodalopen());
    console.log(isEditModalVisible)
};
  return (

    <>
       <div className='user-profile-card'>
    <div className='user-profile-card-top'>
        <img 
        src="https://source.unsplash.com/800x600/?nature" 
        alt="coverimage"
        className='cover-image'
        />
    </div>
<div className='user-profile-card-middle'>
<img
      class="profile-image"
      src="https://polygram.herokuapp.com/api/pictures/6217439fb0b70e0016cc6b77"
      alt="profilepic"
    />
<div className='button-grp'>
   <Button className={'edit-btn'} onClick={editHandler()}>
    Edit Profile
    </Button> 

    <IconButton >
        <CgLogOut />
      </IconButton>
    {/* <Button>
    Edit Profile
    </Button>  */}
</div>

</div>
<div className='user-profile-card-bottom'>
<h3 className='name'>
{user.firstname??""}
</h3>
<span className='username'>
    @alceil
</span>
</div>
   </div>
   <EditProfile/>

    </>

  )
}

export default UserProfile