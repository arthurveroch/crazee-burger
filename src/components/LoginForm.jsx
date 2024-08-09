import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from './reusable/Input';
import Button from './reusable/Button';
import { BsPersonCircle } from 'react-icons/bs';

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
        <Input
          type={'text'}
          onChange={handleChange}
          value={name}
          placeholder={'Entrez votre prénom'}
          required
          inputIcon={<BsPersonCircle />}
          className={'input-container'}
        />
        <Button content={'Accédez à votre espace'} />
      </LoginFormStyled>
    </>
  );
}

const LoginFormStyled = styled.form`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
