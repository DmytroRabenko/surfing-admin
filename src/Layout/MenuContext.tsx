import React, { createContext, useState, useContext, ReactNode } from 'react';

type MenuContextType = {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);
//eslint-disable-next-line
export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};

type MenuProviderProps = {
  children: ReactNode;
};

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  
  return (
    <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
