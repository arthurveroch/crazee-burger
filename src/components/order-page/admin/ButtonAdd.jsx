import styled from 'styled-components';

export default function ButtonAdd() {
  return <ButtonAddStyled>Ajouter un nouveau produit au menu</ButtonAddStyled>;
}

const ButtonAddStyled = styled.button`
  all: unset;
  cursor: pointer;
  background: #60bd4f;
  width: 275px;
  padding: 10px 29px;
  font-family: Arial, sans-serif;
  font-size: 12px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;
`;
