import React from 'react'
import './styles.css'
import { useDispatch } from "react-redux"
import {  loginmodalopen, signupmodalopen } from '../../../redux/slices/users.slice';


const AuthButton = () => {
  const dispatch = useDispatch();

  // const signupdata = {
  //   username:"alceil",
  //   password:"buhahaha"

  // }

  const loginHandler = () => {
    dispatch(loginmodalopen());
};

  const signupHandler = () => {
    dispatch(signupmodalopen());
};

  return (
    <div className='nav-auth'>
        <button className='auth-btn' onClick={loginHandler}>
            Login
        </button>
        <button className='auth-btn' onClick={signupHandler}>
            Signup
        </button>
    </div>
  )
}

export default AuthButton