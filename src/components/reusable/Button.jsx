import styled from 'styled-components';
import { LuChevronRight } from 'react-icons/lu';

export default function Button({ content }) {
  return (
    <ButtonStyled>
      {content}
      <LuChevronRight />
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
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
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #ff9f1b;
    border: 1px solid #ff9f1b;
  }

  svg {
    margin-left: 9.8px;
  }
`;
