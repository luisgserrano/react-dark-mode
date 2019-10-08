import React, { useContext } from 'react';

// Darkmode provider
import { darkmodeContext } from '../../src/Provider';

const InnerTest = () => {
  const { mode } = useContext(darkmodeContext);

  return <>I'm an inner component and I react to the theme change. I'm {mode}.</>;
};

export default InnerTest;
