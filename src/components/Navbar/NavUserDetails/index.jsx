import React from 'react'
import './styles.css'
import { useSelector } from "react-redux";
const NavUserDetails = () => {
  const user = useSelector((state) => state.user.user);
const {firstname,lastname,username,profilePic} =user;
  return (
    <div className="author_details">
    <img
      className="profilepic"
      src={profilePic}
      alt="profilepic"
    />
    <div className="username">
      <h6>{firstname??""}
      {lastname && ` ${lastname}`}
      </h6>
      <span className="userid">@{username??""}</span>
    </div>
  </div>
  )
}

export default NavUserDetails