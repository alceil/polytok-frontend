import { useState } from 'react';
import { CgLogOut } from 'react-icons/cg';
import {useDispatch} from 'react-redux';
import IconButton from '../../../../common/IconButton';
import ConfirmDialog from '../../../../common/ConfirmDialog';
import { logoutBtnPressed } from "../../../../../redux/slices/users.slice";
import { useNavigate } from 'react-router-dom';
// import useLogoutUser from '../../../../../hooks/useLogoutUser';

const LogoutButton = () => {
  // const logout = useLogoutUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const handleButtonClick = async () => {
    setPopupVisibility(true);
  };

  const handlePopupClose = () => {
    setPopupVisibility(false);
  };

  const handleSuccess = () => {
    dispatch(logoutBtnPressed())
    navigate('/')
    setPopupVisibility(false);
  };

  return (
    <>
      <IconButton onClick={handleButtonClick}>
        <CgLogOut />
      </IconButton>
      <ConfirmDialog
        title="Logout"
        onSuccess={handleSuccess}
        isOpen={isPopupVisible}
        onClose={handlePopupClose}
        onAbort={handlePopupClose}
        message="Are you sure you want to logout?"
      />
    </>
  );
};

export default LogoutButton;
