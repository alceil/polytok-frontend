import React,{useState,useMemo} from 'react'
import {loginService, loginmodalclose } from '../../../redux/slices/users.slice'
import {showSnackbar } from '../../../redux/slices/snackbar.slice'
import Button from '../Button'
import Modal from '../Modal'
import TextInput from '../TextInput'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { passwordRegex,emailRegex } from '../../../utils/regex';
import './LoginModal.css'
const LoginModal = () => {
  const dispatch = useDispatch();
  const isLoginModalVisible = useSelector((state) => state.user.isLoginModalVisible);

    const [inputData,setInputData] = useState(
      {
        email: "",
        password: "",
      }
      )
      const [emailError, setEmailError] = useState(null);
      const [passwordError, setPasswordError] = useState(null);

  const isValid = useMemo(() => !emailError && !passwordError, [emailError, passwordError]);
  const handleLoginSubmit=(e)=>{
    e.preventDefault();
  // Checking if form has any errors
  if (!isValid) return;

  // Call showSnackbar with the desired type and message
  dispatch(showSnackbar({ type: 'success', message: 'Snackbar message here' }));
  
    dispatch(loginService(inputData))
    dispatch(loginmodalclose())
  } 
    const handleModalClose = () => {
      dispatch(loginmodalclose());
      setInputData({
        email: "",
        password: "",
      })
      setEmailError(null)
      setPasswordError(null)
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
                      autoFocus
                      minLength={5}
                      maxLength={50}
                      label="Email Address"
                      value={inputData.email}
                      error={emailError}
                      pattern={emailRegex}
                      setError={setEmailError}
                      onChange={handleInputChange('email')}
                      patternMessage="Please enter a valid email"
                 />
                <TextInput
                        minLength={8}
                        maxLength={50}
                        type='password'
                        label="Password"
                        value={inputData.password}
                        error={passwordError}
                        pattern={passwordRegex}
                        setError={setPasswordError}
                        onChange={handleInputChange('password')}
                        patternMessage="Password must contain at least an alphabet, a special character and a number"
                 
                 />
<Button  type="submit">
    Log in
</Button>

            </form>
        </div>
    </Modal>
  )
}

export default LoginModal