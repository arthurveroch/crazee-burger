import styled from 'styled-components';
import { useContext } from 'react';
import AdminContext from '../../../context/AdminContext';
import AdminPanel from './AdminPanel';
import AdminTabs from './AdminTabs';
import { useState } from 'react';
import SelectedTab from '../../../context/SelectedTab';

export default function Admin() {
  const admin = useContext(AdminContext);
  const [isAddSelected, setIsAddSelected] = useState(true);
  const [isEditSelected, setIsEditSelected] = useState(false);
  const [up, setUp] = useState(true);
  const SelectedTabValue = {
    isAddSelected,
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected,
  };
  return (
    <AdminStyled style={!admin.isAdmin ? { display: 'none' } : {}}>
      <SelectedTab.Provider value={SelectedTabValue}>
        <AdminTabs up={up} setUp={setUp} />
        <AdminPanel up={up} setUp={setUp} />
      </SelectedTab.Provider>
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  width: 100%;
  position: sticky;
  bottom: 0;
  font-family: 'Open Sans', sans-serif;
`;
