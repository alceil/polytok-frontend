import React from 'react'
import './styles.css'
import { useDispatch } from "react-redux"
import { signup } from '../../../redux/actions/auth.action';


const AuthButton = () => {
  const dispatch = useDispatch();
  const signupdata = {
    username:"alceil",
    password:"buhahaha"

  }
  const signupHandler = () => {
    dispatch(signup(signupdata));
};

  return (
    <div className='nav-auth'>
        <button className='auth-btn'>
            Login
        </button>
        <button className='auth-btn' onClick={signupHandler}>
            Signup
        </button>
    </div>
  )
}

export default AuthButton