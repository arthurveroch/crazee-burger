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
  font-family: 'arial', sans-serif;
  gap: 10px;
`;
