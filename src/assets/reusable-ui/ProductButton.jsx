import styled from 'styled-components';

export default function ProductButton({ content }) {
  return <ProductButtonStyled>{content}</ProductButtonStyled>;
}

const ProductButtonStyled = styled.button`
  all: unset;
  width: 95px;
  height: 37px;
  background: #ff9f1b;
  border-radius: 5px;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: 'arial', sans-serif;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    background: #fff;
    border: 1px solid #ff9f1b;
    color: #ff9f1b;
  }
`;
