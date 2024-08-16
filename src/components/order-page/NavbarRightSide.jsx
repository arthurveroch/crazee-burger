import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from '../../theme/index';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import UserInfos from '../../assets/reusable-ui/UserInfos';
import { IoPersonCircleOutline } from 'react-icons/io5';
import ToggleButton from './ToggleButton';
import { FaUserSecret } from 'react-icons/fa';

export default function NavbarRightSide({ name }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const notify = () => {
    toast.info('Mode admin activé', {
      icon: <FaUserSecret size={30} />,
      theme: 'dark',
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (isAdmin) {
      notify();
    }
  }, [isAdmin]);

  const handleToggle = () => {
    setIsAdmin(!isAdmin);
  };
  return (
    <NavbarRightSideStyled>
      <ToggleButton isChecked={isAdmin} onToggle={handleToggle} />
      <UserInfos icon={<IoPersonCircleOutline />} name={name} />
      <ToastContainer className='toaster' bodyClassName='body-toast' />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 430px;
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
