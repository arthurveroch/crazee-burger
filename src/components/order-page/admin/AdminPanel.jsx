import { useContext } from 'react';
import styled from 'styled-components';
import SelectedTab from '../../../context/SelectedTab';

export default function AdminPanel({ up }) {
  const content = useContext(SelectedTab);
  return (
    <AdminPanelStyled style={!up ? { display: 'none' } : {}}>
      {content.isAddSelected ? (
        <p>Ajouter un produit</p>
      ) : content.isEditSelected ? (
        <p>Modifier un produit</p>
      ) : (
        ''
      )}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  height: 250px;
`;
