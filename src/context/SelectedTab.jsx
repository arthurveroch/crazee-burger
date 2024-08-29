import { createContext } from 'react';

export default createContext({
  isAddSelected: true,
  setIsAddSelected: () => {},
  isEditSelected: false,
  setIsEditSelected: () => {},
});
