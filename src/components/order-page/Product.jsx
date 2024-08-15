import styled from 'styled-components';
import { useState } from 'react';
import Card from './Card';
import { fakeMenu1, fakeMenu2 } from '../../assets/fakeData/fakeMenu';

export default function Product() {
  const [menu, setMenu] = useState(fakeMenu2);
  return (
    <ProductStyled>
      {menu.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </ProductStyled>
  );
}

const ProductStyled = styled.div`
  width: 100%;
  background: #f5f5f7;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;
  row-gap: 60px;
  column-gap: 85px;
`;
