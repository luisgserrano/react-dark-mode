import React, { useContext } from 'react';

// Darkmode provider
import { useDarkmodeContext } from '../../src/Provider';

const InnerTest = () => {
  const { mode } = useDarkmodeContext();

  return <>I'm an inner component and I react to the theme change. I'm {mode}.</>;
};

export default InnerTest;
