import React from 'react'
import Button from '../Button'
import Modal from '../Modal'
import TextInput from '../TextInput'
import './SignUpModal.css'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import {  signupService, signupmodalclose } from '../../../redux/slices/users.slice'
import {makeObjectFromArray} from '../../../utils/common';
import { useState,useMemo } from "react";
import { emailRegex, passwordRegex, usernameRegex } from '../../../utils/regex';
const SignUpModal = () => {
  const isSignUpModalVisible = useSelector((state) => state.user.isSignUpModalVisible);
  const dispatch = useDispatch();
  const signUpInputFields = [
    'email',
    'username',
    'password',
    'lastname',
    'firstname',
  ];
    // An object with names of each input field as keys  and value ''
    const [inputs, setInputs] = useState(makeObjectFromArray(signUpInputFields, ''));

    // An object with names of each input field as keys and value null
    const [errors, setErrors] = useState(makeObjectFromArray(signUpInputFields, null));
  
    // isValid will be false if any entries of error object is not null
    const isValid = useMemo(() => Object.values(errors).every((error) => error === null), [errors]);


    const handleSignUpSubmit=(e)=>{
      e.preventDefault();
      if(!isValid) return;
      dispatch(signupService(inputs))
      dispatch(signupmodalclose())
    }

    const handleModalClose = () => {
      setInputs(makeObjectFromArray(signUpInputFields, ''));
      setErrors(makeObjectFromArray(signUpInputFields, null));
      dispatch(signupmodalclose());
      console.log(isSignUpModalVisible)
    };

    const handleInputChange = (inputName) => (e) => {
      setInputs((initialValues) => ({ ...initialValues, [inputName]: e.target.value }));
    }; 

    const setSingleError = (inputName) => (error) => {
      setErrors((initialErrors) => ({ ...initialErrors, [inputName]: error }));
    };
    
  return (
    <Modal isOpen={isSignUpModalVisible} onClose={handleModalClose}>
        <div className='signup-modal'>
            <div className='signup-head'>
                    <h1 className='signup-title'>Join polywork via email</h1>
            </div>
            <form onSubmit={handleSignUpSubmit} className="signup-form">
                <TextInput
                autofocus
                minLength={5}
                maxLength={50}
                label="Email Address"
                value={inputs.email}
                error={errors.email}
                pattern={emailRegex}
                setError={setSingleError('email')}
                onChange={handleInputChange('email')}
                patternMessage="Please enter a valid email"
                 />
                <TextInput
                              minLength={4}
                              maxLength={15}
                              label="Username"
                              error={errors.username}
                              value={inputs.username}
                              pattern={usernameRegex}
                              setError={setSingleError('username')}
                              onChange={handleInputChange('username')}
                              patternMessage="Username must only contain small letters, numbers, dashes and underscore"
                   />
<div className='name-row'>
                <TextInput
                minLength={3}
                maxLength={30}
                label="First Name"
                className="first-name"
                error={errors.firstname}
                value={inputs.firstname}
                setError={setSingleError('firstname')}
                onChange={handleInputChange('firstname')}
                 />
                <TextInput
                 minLength={0}
                 maxLength={30}
                 label="Last Name"
                 className="last-name"
                 error={errors.lastname}
                 value={inputs.lastname}
                 setError={setSingleError('lastname')}
                 onChange={handleInputChange('lastname')}
                 />                 
</div>
<TextInput
 minLength={8}
 maxLength={50}
 type="password"
 label="Password"
 value={inputs.password}
 error={errors.password}
 pattern={passwordRegex}
 setError={setSingleError('password')}
 onChange={handleInputChange('password')}
 patternMessage="Password must contain at least an alphabet, a special character and a number"
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