import React from 'react'
import './styles.css'
const TextInput = ({className,name,  type = 'text',label}) => {
  return (
    <div className={`input-wrapper ${className||''}`}>
        <div className='input-with-label'>
        <label htmlFor={name ?? 'text-input'}>
        {label}
    </label>
  <input 
    type={type} 
   className={type === 'password'?'password-input':''}
   placeholder={label}
  />

        </div>
    </div>
  )
}

export default TextInput