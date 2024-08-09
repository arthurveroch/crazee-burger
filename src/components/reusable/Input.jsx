import styled from 'styled-components';

export default function ({
  value,
  onChange,
  inputIcon,
  className,
  ...restProps
}) {
  return (
    <InputStyled className={className}>
      {inputIcon ? inputIcon : ''}
      <input value={value} onChange={onChange} {...restProps}></input>
    </InputStyled>
  );
}

const InputStyled = styled.div`
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

  input {
    all: unset;
    width: 324px;
    height: 19px;
    font-family: Arial, Helvetica, sans-serif;
  }

  svg {
    color: grey;
  }

  input::placeholder {
    color: #d3d3d3;
  }
`;
