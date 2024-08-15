import styled from 'styled-components';
import Product from './Product';

export default function Main() {
  return (
    <MainStyled>
      <Product />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  width: 100%;
  height: 80svh;
  background: #f5f5f7;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
