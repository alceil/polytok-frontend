import React from 'react'
import './TextInput.css'
const TextInput = ({className,name,  type = 'text',label,...props}) => {
  return (
    <div className={`input-wrapper ${className||''}`}>
        <div className='input-with-label'>
        <label htmlFor={name ?? 'text-input'}>
        {label}
    </label>
  <input 
    type={type} 
   className='input-test'
   placeholder={label}
   {...props}
  />

        </div>
    </div>
  )
}

export default TextInput