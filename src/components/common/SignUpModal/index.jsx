import React from 'react'
import Button from '../Button'
import Modal from '../Modal'
import TextInput from '../TextInput'
import './styles.css'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import {  signupmodalclose } from '../../../redux/actions/auth.action'
const SignUpModal = () => {
  const isSignUpModalVisible = useSelector((state) => state.isSignUpModalVisible);
  console.log("SignupModal")
  console.log(isSignUpModalVisible)
  const dispatch = useDispatch();
    const handleSignUpSubmit=()=>{
    }

    const handleModalClose = () => {
      dispatch(signupmodalclose());
      console.log(isSignUpModalVisible)
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
                 />
<div className='name-row'>
                <TextInput
                className="first-name"
                 label="First Name"
                 />
                <TextInput
                className="last-name"
                 label="Last Name"
                 />                 
</div>

<TextInput
                 label="Password"
                 />
<Button>
    Join Polytok
</Button>

            </form>
        </div>
    </Modal>
  )
}

export default SignUpModal