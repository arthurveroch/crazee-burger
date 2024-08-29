import styled from 'styled-components';
import Tab from './Tab';
import { GoChevronDown } from 'react-icons/go';
import { GoChevronUp } from 'react-icons/go';
import { FiPlus } from 'react-icons/fi';
import { MdModeEditOutline } from 'react-icons/md';
import { useContext } from 'react';
import SelectedTab from '../../../context/SelectedTab';

export default function AdminTabs({ up, setUp }) {
  const tab = useContext(SelectedTab);
  const handleUp = () => {
    setUp(!up);
  };

  const handleAdd = () => {
    tab.setIsAddSelected(true);
    tab.setIsEditSelected(false);
  };

  const handleEdit = () => {
    tab.setIsEditSelected(true);
    tab.setIsAddSelected(false);
  };

  return (
    <AdminTabsStyled>
      <Tab onClick={handleUp} icon={up ? <GoChevronDown /> : <GoChevronUp />} />
      <Tab
        className={tab.isAddSelected ? 'active' : ''}
        onClick={handleAdd}
        icon={<FiPlus />}
        content={'Ajouter un produit'}
      />
      <Tab
        className={tab.isEditSelected ? 'active' : ''}
        onClick={handleEdit}
        icon={<MdModeEditOutline />}
        content={'Modifier un produit'}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  width: 100%;
  padding-left: 70px;
  display: flex;
  gap: 1px;
`;
