export function setDarkModeCookieValue(value) {
  document.cookie = `dark=${value}; max-age=31536000; path=/`;
  document.cookie = `dark=${value}; max-age=31536000; domain=remote.com; path=/`;
}

export function getDarkModeCookieValue() {
  let value;
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split(';');
    const filteredCookies = cookies.filter(cookie => cookie.indexOf('dark=') >= 0);

    if (filteredCookies.length) {
      value =
        filteredCookies[0].substring(
          filteredCookies[0].indexOf('true'),
          filteredCookies[0].length
        ) === 'true'
          ? 'dark'
          : 'light';
    }
  }

  return value;
}

export function getPreferredTheme() {
  const preferredTheme = getDarkModeCookieValue();
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  return preferredTheme || (darkQuery.matches ? 'dark' : 'light');
}
