import React from 'react'
import './styles.css'
import { BiX } from 'react-icons/bi';
const Modal = ({isOpen,onClose,children}) => {
  return isOpen?(
    <>
<div className='modal-bg' onClick={onClose}>
<div className='modal'>
  <div className='modal-close' onClick={onClose}>
<BiX/>
  </div>
  <div className='modal-body'>
    {children}
  </div>
</div>
    </div>
    </>
  ):
  (
  <></>
  )
}

export default Modal