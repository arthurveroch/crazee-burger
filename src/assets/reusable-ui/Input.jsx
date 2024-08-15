import { useState } from 'react';
import styled from 'styled-components';

export default function Input({
  icon,
  placeholder,
  type,
  style,
  onChange,
  value,
  required,
}) {
  return (
    <InputStyled>
      {icon}
      <input
        required={required}
        value={value}
        onChange={onChange}
        style={style}
        type={type}
        placeholder={placeholder}
      />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  width: 400px;
  height: 55px;
  background: #fff;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 18px 24px 18px 24px;
  gap: 13px;

  input {
    all: unset;
    width: 324px;
    font-family: Arial, sans-serif;
  }

  input::placeholder {
    color: #d3d3d3;
  }

  svg {
    font-size: 15px;
    color: grey;
  }
`;
