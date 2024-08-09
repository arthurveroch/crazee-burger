import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function LoginForm() {
  const [name, setName] = useState('');

  const navigation = useNavigate();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigation(`/order/${name}`);
  };
  return (
    <>
      <LoginFormStyled onSubmit={handleSubmit}>
        <div className='input-container'>
          <img src='../src/assets/images/icon-name.png' />
          <input
            required
            value={name}
            onChange={handleChange}
            type='text'
            placeholder='Entrez votre prénom'
          ></input>
        </div>
        <button>
          Accédez à votre espace <img src='../src/assets/images/chevron.png' />
        </button>
      </LoginFormStyled>
    </>
  );
}

const LoginFormStyled = styled.form`
  input {
    all: unset;
    width: 324px;
    height: 19px;
    font-family: Arial, Helvetica, sans-serif;
  }

  input::placeholder {
    color: #d3d3d3;
  }

  .input-container {
    width: 400px;
    height: 55px;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 18px;
    margin-top: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12.8px;
    padding: 20px 24px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  button {
    all: unset;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    width: 400px;
    height: 53px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #ff9f1b;
    border-radius: 5px;
  }

  button img {
    margin-left: 9.8px;
  }
`;
