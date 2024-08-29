import styled from 'styled-components';
import InputAdd from './InputAdd';
import { FaHamburger } from 'react-icons/fa';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import ButtonAdd from './ButtonAdd';
import { useState } from 'react';

export default function AddingPanel() {
  const [url, setUrl] = useState('');
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  return (
    <AddingPanelStyled>
      <div className='container'>
        <div className='image'>
          {!url ? <p>Aucune image</p> : <img src={url} />}
        </div>
        <div className='inputs'>
          <InputAdd
            type={'text'}
            icon={<FaHamburger />}
            placeholder={'Nom du produit (ex: Super Burger)'}
          />
          <InputAdd
            type={'text'}
            value={url}
            onChange={handleChange}
            icon={<BsFillCameraFill />}
            placeholder={`Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)`}
          />
          <InputAdd
            icon={<MdOutlineEuro />}
            type={'text'}
            placeholder={'Prix'}
          />
          <ButtonAdd />
        </div>
      </div>
    </AddingPanelStyled>
  );
}

const AddingPanelStyled = styled.div`
  margin-left: 70px;

  .container {
    width: 100%;
    display: flex;
    gap: 20px;
  }

  .image {
    width: 215px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #93a2b1;
    border: 1px solid #e4e5e9;
    font-size: 16px;
    border-radius: 5px;
  }

  .image img {
    width: 100%;
    object-fit: contain;
  }

  .inputs {
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 13px;
  }
`;
