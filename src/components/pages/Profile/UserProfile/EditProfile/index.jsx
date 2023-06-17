import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import TextInput from '../../../../common/TextInput'
import Button from '../../../../common/Button'
import Modal from '../../../../common/Modal'
import {   updatedetails, updateUserDetails} from '../../../../../redux/slices/users.slice'
import { useState } from "react";
import './EditProfile.css'
const EditProfile = ({isOpen,onClose}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const handleInputChange = (inputName) => (e) => {
      setInputs((initialValues) => ({ ...initialValues, [inputName]: e.target.value }));
    }; 
  
    const [inputs, setInputs] = useState({});

    useEffect(() => {
      setInputs({
        firstname: user.firstname,
        lastname: user.lastname,
        bio: user.bio,
      });
    }, [user]);

    const handleEditDetails=(e)=>{
        e.preventDefault();
        dispatch(updateUserDetails({...inputs,id:user._id}))
        onClose();
    }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className='login-modal'>
            <div className='login-head'>
                    <h1 className='login-title'>Edit Details</h1>
            </div>
            <form onSubmit={handleEditDetails} className="login-form">
            <TextInput
                 label="First Name"
                 value={inputs.firstname??''}
                 onChange={handleInputChange('firstname')}
                 />
                <TextInput
                 label="Last Name"
                 value={inputs.lastname??''}
                 onChange={handleInputChange('lastname')}
                 /> 
                <TextInput
                 label="Bio"
                 value={inputs.bio??''}
                 onChange={handleInputChange('bio')}
                 /> 
<Button >
   Update Details
</Button >

            </form>
        </div>
    </Modal>
  )
}

export default EditProfile