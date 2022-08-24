import React from 'react'
import Button from '../Button'
import Modal from '../Modal'
import TextInput from '../TextInput'
import './styles.css'
const SignUpModal = () => {

    const handleSignUpSubmit=()=>{

    }
  return (
    <Modal isOpen={true}>
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