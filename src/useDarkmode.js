import { useState, useEffect } from 'react';

// Helpers
import { getPreferredTheme, setDarkModeCookieValue } from './helpers';

export default function useDarkmode() {
  const [mode, setMode] = useState(getPreferredTheme());

  function toggleMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  function setBodyCssClass(theme) {
    document.body.className = theme;
  }

  useEffect(() => {
    setDarkModeCookieValue(mode === 'dark');
    setBodyCssClass(mode);
  }, [mode]);

  return [mode, toggleMode];
}
