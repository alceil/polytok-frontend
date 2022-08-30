import React from 'react'
import './styles.css'
import { useSelector } from "react-redux";
const NavUserDetails = () => {

  const user = useSelector((state) => state.user);

console.log("User")
console.log(user)

  return (
    <div class="author_details">
    <img
      class="profilepic"
      src="https://polygram.herokuapp.com/api/pictures/6217439fb0b70e0016cc6b77"
      alt="profilepic"
    />
    <div class="username">
      <h6>{user.firstname??""}</h6>
      <span class="userid">@alceil</span>
    </div>
  </div>
  )
}

export default NavUserDetails