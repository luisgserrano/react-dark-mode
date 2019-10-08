import React from 'react';

const DarkModeContext = React.createContext({
  mode: '',
  toggleMode: () => {},
});

export default DarkModeContext;
