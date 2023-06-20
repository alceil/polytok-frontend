import React, { useState } from 'react'
import axios from "axios";
import Button from '../../../common/Button'
import { CgLogOut } from 'react-icons/cg';
import IconButton from '../../../common/IconButton';
import style from './styles.module.css'
import EditProfile from './EditProfile';
import { useDispatch, useSelector } from "react-redux";
import ImageUploadButton from '../../../common/ImageUploadButton';
import { updateProfilePicService } from '../../../../redux/slices/users.slice';
import placeholderProfilePicture from '../../../../assets/images/placeholder_profile_picture.png';
import LogoutButton from './LogoutButton';
const UserProfile = () => {
  const dispatch = useDispatch()
  
const [isModalOpen,setIsModalOpen] = useState(false)
  const user = useSelector((state) => state.user.user);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const {firstname,bio,lastname,username,profilePic,_id} =user;

  const editHandler = () => {
    console.log("edit pressed")
    setIsModalOpen(true)
};

const handlePictureUpload = (file) => {
  getBase64(file)
};

const getBase64 = (file) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    const formData = new FormData();
    formData.append(
      "image",
      reader.result.slice(file.type === "image/png" ? 22 : 23)
    );
    formData.append("name", file.name);
    formData.append("key", process.env.REACT_APP_PUBLIC_IMGBB_STORAGE_KEY);
    console.log("Key#####")
    console.log(process.env.REACT_APP_PUBLIC_IMGBB_STORAGE_KEY)
    const upload = axios
      .post("https://api.imgbb.com/1/upload", formData)
      .then((res) => {
        console.log(res.data.data.url)
        dispatch(updateProfilePicService({
          id:_id,
          imageUrl:res.data.data.url
        }))
        // setData({...data,imageUrl: res.data.data.url})
        // console.log(data)
      });
  


      // toast.promise(upload, {
      //   loading: "Uploading...",
      //   success: `Uploaded ${file.name}.png`,
      //   error: "Error Uploading File",
      // });
  };
};
  return (

    <>
       <div className={style.user_profile_card}>
    <div className={style.user_profile_card_top}>
        <img 
        src="https://source.unsplash.com/800x600/?nature" 
        alt="coverimage"
        className={style.cover_image}
        />
    </div>
<div className={style.user_profile_card_middle}>
  <div class={style.profile_image}>
  <img
      class={style.profile_picture}
      src={isUserLoggedIn?profilePic:placeholderProfilePicture}
      alt="profilepic"
    />
    <ImageUploadButton
                    accept="image/png, image/jpeg, image/jpg"
                    className={style.profile_picture_upload}
                    onUpload={handlePictureUpload}
    />
  </div>

<div className={style.button_grp}>
   <Button className={style.edit_btn}  onClick={() => setIsModalOpen(true)}>
    Edit Profile
    </Button> 
<LogoutButton/>
</div>
</div>
<div className={style.user_profile_card_bottom}>
<h3 className={style.name}>
{firstname??""}
 {lastname && ` ${lastname}`}
</h3>
<span className={style.username}>
    @{username}
</span>
<p className={style.bio}>
  {bio}
</p>

</div>
   </div>
   <EditProfile isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>

  )
}

export default UserProfile