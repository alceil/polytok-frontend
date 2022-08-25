import React from 'react'
import { loginmodalclose } from '../../../redux/actions/auth.action'
import Button from '../Button'
import Modal from '../Modal'
import TextInput from '../TextInput'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import './styles.css'
const LoginModal = () => {
  const dispatch = useDispatch();
    const handleLoginSubmit=()=>{

    }

    const isLoginModalVisible = useSelector((state) => state.isLoginModalVisible);
    const handleModalClose = () => {
      dispatch(loginmodalclose());
      console.log(isLoginModalVisible)
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
                 />
<TextInput
                 label="Password"
                 />
<Button>
    Log in
</Button>

            </form>
        </div>
    </Modal>
  )
}

export default LoginModal