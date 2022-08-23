import React from 'react'
import './styles.css'
const NavUserDetails = () => {
  return (
    <div class="author_details">
    <img
      class="profilepic"
      src="https://polygram.herokuapp.com/api/pictures/6217439fb0b70e0016cc6b77"
      alt="profilepic"
    />
    <div class="username">
      <h6>Ashish Thomas</h6>
      <span class="userid">@alceil</span>
    </div>
  </div>
  )
}

export default NavUserDetails