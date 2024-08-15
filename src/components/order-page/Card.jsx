import styled from 'styled-components';
import ProductButton from '../../assets/reusable-ui/ProductButton';
import { formatPrice } from '../../utils/maths';

export default function Card({ product }) {
  return (
    <CardStyled>
      <div className='image'>
        <img src={product.imageSource} />
      </div>
      <h3>{product.title}</h3>
      <div className='product-infos'>
        <span>{formatPrice(product.price)}</span>
        <ProductButton content={'Ajouter'} />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  border-radius: 15px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 200px;
    height: 145px;
    margin-bottom: 15px;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  h3 {
    font-family: 'Amatic SC', sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #17161a;
  }

  .product-infos {
    width: 190px;
    height: 67px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .product-infos span {
    font-family: 'Open Sans', sans-serif;
    color: #ffa01b;
    font-weight: 400;
  }
`;
