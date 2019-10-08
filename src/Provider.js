import React from 'react';
import DarkModeContext from './darkmodeContext';
import useDarkmode from './useDarkmode';

const Provider = ({ children }) => {
  const [mode, toggleMode] = useDarkmode();

  return (
    <DarkModeContext.Provider value={{ mode, toggleMode }}>{children}</DarkModeContext.Provider>
  );
};

export const darkmodeContext = DarkModeContext;
export default Provider;
