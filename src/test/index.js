import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

// Darkmode provider
import Provider, { darkmodeContext } from '../Provider';

// style
import './style.scss';

const Test = () => {
  const { mode, toggleMode } = useContext(darkmodeContext);

  return (
    <>
      {mode}
      <br />
      <button type="button" onClick={() => toggleMode()}>
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
