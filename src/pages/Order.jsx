import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/order-page/Navbar';
import Main from '../components/order-page/Main';
import styled from 'styled-components';
export default function Order() {
  const { name } = useParams();
  return (
    <OrderStyled>
      <div className='container'>
        <Navbar name={name} />
        <Main />
      </div>
    </OrderStyled>
  );
}

const OrderStyled = styled.div`
  width: 100%;
  height: 100svh;
  background: #ffa01b;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 75%;
  }
`;
