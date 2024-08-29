import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/order-page/Navbar';
import Main from '../components/order-page/Main';
import styled from 'styled-components';
import AdminContext from '../context/AdminContext';
import { useState } from 'react';
export default function Order() {
  const [isAdmin, setIsAdmin] = useState(false);
  const { name } = useParams();

  const valueAdminContext = {
    isAdmin,
    setIsAdmin,
  };

  return (
    <OrderStyled>
      <AdminContext.Provider value={valueAdminContext}>
        <div className='container'>
          <Navbar name={name} />
          <Main />
        </div>
      </AdminContext.Provider>
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
