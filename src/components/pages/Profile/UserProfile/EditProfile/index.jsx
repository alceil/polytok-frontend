import React from 'react'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import TextInput from '../../../../common/TextInput'
import Button from '../../../../common/Button'
import Modal from '../../../../common/Modal'
import {   updatedetails,editprofilemodalclose } from '../../../../../redux/actions/auth.action'
import { useState } from "react";
import './styles.css'
const EditProfile = () => {
    const dispatch = useDispatch();
    const [firstname, setFirstname] = useState("");
    const isEditModalVisible = useSelector((state) => state.isEditModalVisible);
    console.log(isEditModalVisible);

    const handleModalClose = () => {
      dispatch(editprofilemodalclose());
      console.log("closed")
      console.log(isEditModalVisible)
    };

    const handleEditDetails=(e)=>{
        // dispatch(loginmodalclose());
        e.preventDefault();
        dispatch(updatedetails({firstname}))
        dispatch(editprofilemodalclose())
        console.log("updated")
        console.log(isEditModalVisible)
    }
  return (
    <Modal isOpen={false} onClose={handleModalClose}>
        <div className='login-modal'>
            <div className='login-head'>
                    <h1 className='login-title'>Log in</h1>
            </div>
            <form onSubmit={handleEditDetails} className="login-form">
            <TextInput
                className="first-name"
                 label="First Name"
                 value={firstname}
                 onChange={(e) => setFirstname(e.target.value)}
                 />
                <TextInput
                className="last-name"
                 label="Last Name"
                 /> 
<Button  onClick={(e) => handleEditDetails(e)}>
   Update Details
</Button >

            </form>
        </div>
    </Modal>
  )
}

export default EditProfile