import { useContext } from 'react';
import styled from 'styled-components';
import SelectedTab from '../../../context/SelectedTab';
import AddingPanel from './AddingPanel';

export default function AdminPanel({ up }) {
  const content = useContext(SelectedTab);
  return (
    <AdminPanelStyled style={!up ? { display: 'none' } : {}}>
      {content.isAddSelected ? (
        <AddingPanel />
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
  padding-top: 30px;
  background: #fff;
  height: 250px;
`;
