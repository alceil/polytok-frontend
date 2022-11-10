import React,{useState} from 'react'
import {loginService, loginmodalclose } from '../../../redux/slices/users.slice'
import Button from '../Button'
import Modal from '../Modal'
import TextInput from '../TextInput'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import './styles.css'
const LoginModal = () => {
  const dispatch = useDispatch();
    const handleLoginSubmit=(e)=>{
      e.preventDefault();
      dispatch(loginService(inputData))
      dispatch(loginmodalclose())
    }
    const [inputData,setInputData] = useState(
      {
        email: "",
        password: "",
      }
      )
    const isLoginModalVisible = useSelector((state) => state.user.isLoginModalVisible);
    const handleModalClose = () => {
      dispatch(loginmodalclose());
      console.log(isLoginModalVisible)
    };

    const handleInputChange = (inputName) => (e) => {
      setInputData((initialValues) => ({ ...initialValues, [inputName]: e.target.value }));
    }; 
  return (
    <Modal isOpen={isLoginModalVisible} onClose={handleModalClose}>
        <div className='login-modal'>
            <div className='login-head'>
                    <h1 className='login-title'>Log in</h1>
            </div>
            <form onSubmit={handleLoginSubmit} className="login-form">
                <TextInput
                 label="Email Address"
                 onChange={handleInputChange('email')}
                 />
                <TextInput
                 label="Password"
                 onChange={handleInputChange('password')}
                 />
<Button >
    Log in
</Button>

            </form>
        </div>
    </Modal>
  )
}

export default LoginModal