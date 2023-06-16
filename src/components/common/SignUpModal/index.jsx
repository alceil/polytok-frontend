import React from 'react'
import Button from '../Button'
import Modal from '../Modal'
import TextInput from '../TextInput'
import './SignUpModal.css'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import {  signupService, signupmodalclose } from '../../../redux/slices/users.slice'
import { useState } from "react";
const SignUpModal = () => {
  const isSignUpModalVisible = useSelector((state) => state.user.isSignUpModalVisible);
  console.log("SignupModal")
  console.log(isSignUpModalVisible)
  const dispatch = useDispatch();

  const [inputData,setInputData] = useState(
    {
      email: "",
      firstname: "",
      lastname: "",
      username: "",
      password: "",
    }
    )
    const handleSignUpSubmit=(e)=>{
      e.preventDefault();

      dispatch(signupService(inputData))
      dispatch(signupmodalclose())
    }

    const handleModalClose = () => {
      dispatch(signupmodalclose());
      console.log(isSignUpModalVisible)
    };

    const handleInputChange = (inputName) => (e) => {
      setInputData((initialValues) => ({ ...initialValues, [inputName]: e.target.value }));
    }; 

  return (
    <Modal isOpen={isSignUpModalVisible} onClose={handleModalClose}>
        <div className='signup-modal'>
            <div className='signup-head'>
                    <h1 className='signup-title'>Join polywork via email</h1>
            </div>
            <form onSubmit={handleSignUpSubmit} className="signup-form">
                <TextInput
                 label="Email Address"
                 onChange={handleInputChange('email')}
                 />
                                 <TextInput
                 label="User Name"
                 onChange={handleInputChange('username')}
                 />
<div className='name-row'>
                <TextInput
                className="first-name"
                 label="First Name"
                 onChange={handleInputChange('firstname')}
                 />
                <TextInput
                className="last-name"
                 label="Last Name"
                 onChange={handleInputChange('lastname')}
                 />                 
</div>
  
<TextInput
                 label="Password"
                 onChange={handleInputChange('password')}
                 />
<Button className='signup-btn' onClick={(e) => handleSignUpSubmit(e)} >
    Join Polytok
</Button>

            </form>
        </div>
    </Modal>
  )
}

export default SignUpModal