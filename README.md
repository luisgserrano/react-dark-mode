# React dark mode

React dark mode is a solution for you to integrate dark mode in your application.
Behind the scenes, it's based on the React `context API` so you can have access to the dark mode theme state and the toggle function in any component.

## Installation

```shell
npm install react-use-dark-mode --save
```

## Documentation and Examples

### How it works

By using the `context API` from React in `react-use-dark-mode`, you'll be able to access the theme state and the toggle function to change the current theme in any component you need.

To use the context state and methods in your components, you need to add our `Provider` component around your top level component or any component, just remember that you'll only have access to the context on components that are children of our `Provider` component.

This `Provider` component creates the state and the toggle function for you and the necessary logic to update the state and finally, adds the context provider component around his children so that any component below the tree can subscribe to context changes.

This context exposes the `mode` variable, which is the theme that can be `light` or `dark` and the `toggleMode` function which toggles the theme. When the mode changes, the subscribed component will re-render.

To help you out with styling your app, we detect if the user has requested the system use a light or dark color theme (by using the `prefers-color-scheme` CSS media feature) and set this theme as a class of the `body` tag like `<body class="dark">`.

By having this, you can create different styles when the body tag as the css class `dark` or `light`.

### Examples

If you're using `React 16.8.0`, you can use hooks like in these examples! 😌

Imagine that you have an `Header` component that should render a different logo based on the darkmode theme and have a button that should toggle the darkmode theme.

```javascript
import Provider, { useDarkmodeContext } from 'react-use-dark-mode';

// Images
import BlackLogo from './blackLogo.svg';
import WhiteLogo from './WhiteLogo.svg';

const Header = () => {
  const { mode, toggleMode } = useDarkmodeContext();

  function getLogo(theme) {
    return theme === 'light' ? BlackLogo : WhiteLogo;
  }

  return (
    <header>
      <img src={getLogo(mode)} alt="Logo" />
      <button type="button" onClick={toggleMode}>
        Toggle darkmode
      </button>
    </header>
  );
};

ReactDOM.render(
  <Provider>
    <Header />
  </Provider>,
  document.getElementById('header')
);
```

Then, if you're using css variables or just regular sass you could change the theme of your website.

```scss
body {
  background-color: white;
  color: black;

  &.dark {
    color: white;
    background-color: black;
  }
}
```

or with css variables,

```css
:root {
  --textPrimaryColor: #000;
  --backgroundPrimaryColor: #fff;
}

body {
  color: var(--textPrimaryColor);
  background-color: var(--backgroundPrimaryColor);
}

body.dark {
  --textPrimaryColor: #fff;
  --backgroundPrimaryColor: #000;
}

.block__element {
  color: var(--textPrimaryColor);
}
```
