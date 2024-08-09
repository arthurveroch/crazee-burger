import React from 'react';
import styled from 'styled-components';

export default function Logo() {
  return (
    <LogoStyled className='logo'>
      <h1 className='logo-text'>Crazee</h1>
      <img src='../src/assets/images/logo.png' />
      <h1 className='logo-text'>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 200px;
  }

  .logo-text {
    font-family: 'Amatic SC', sans-serif;
    font-weight: 700;
    font-size: 110px;
    color: #ff9f1b;
  }
`;
