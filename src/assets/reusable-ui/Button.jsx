import styled from 'styled-components';

export default function Button({ icon, content }) {
  return (
    <ButtonStyled>
      {content} {icon && icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  all: unset;
  background: #ff9f1b;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53px;
  border-radius: 5px;
  border: 1px solid transparent;
  font-family: 'arial', sans-serif;
  gap: 10px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out,
    border 0.3s ease-in-out;

  &:hover {
    background: #fff;
    color: #ff9f1b;
    border: 1px solid #ff9f1b;
  }
`;
