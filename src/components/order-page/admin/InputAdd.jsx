import styled from 'styled-components';

export default function InputAdd({ type, placeholder, icon, value, onChange }) {
  return (
    <InputAddStyled>
      {icon && icon}
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      ></input>
    </InputAddStyled>
  );
}

const InputAddStyled = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 24px;
  gap: 13px;
  background: #f5f5f7;
  border-radius: 5px;

  input {
    all: unset;
    font-size: 14px;

    flex: 1;
  }

  input::placeholder {
    color: #a7a8ad;
  }

  svg {
    color: #747b91;
    font-size: 15px;
  }
`;
