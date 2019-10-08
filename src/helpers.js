export function setDarkModeCookieValue(value) {
  document.cookie = `dark=${value}; max-age=31536000; path=/`;
  document.cookie = `dark=${value}; max-age=31536000; domain=remote.com; path=/`;
}

export function getDarkModeCookieValue() {
  let value;
  if (typeof document !== 'undefined') {
    if (document.cookie.split(';').filter(item => item.indexOf('dark=true') >= 0).length) {
      value = 'dark';
    }
  }

  return value;
}

export function getPreferredTheme() {
  const preferredTheme = getDarkModeCookieValue();
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  return preferredTheme || (darkQuery.matches ? 'dark' : 'light');
}
