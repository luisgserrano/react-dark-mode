import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

// Components
import Inner from './inner';

// Darkmode provider
import Provider, { useDarkmodeContext } from '../../src/Provider';

// style
import '../style/main.scss';

const Test = () => {
  const { toggleMode } = useDarkmodeContext();

  return (
    <>
      <Inner />
      <br />
      <button type="button" onClick={toggleMode}>
        Toggle
      </button>
    </>
  );
};

ReactDOM.render(
  <Provider>
    <Test />
  </Provider>,
  document.getElementById('test')
);
