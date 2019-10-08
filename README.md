# React dark mode

React dark mode is a solution so you can integrate dark mode in your application. It gives you access to the necessary
state and methods to toggle the dark mode theme and react on that chage.

## Installation

```shell
npm install react-dark-mode --save
```

## Documentation and Examples

### Provider and context object

I give you access to the context object so you can react to the change of the theme.
The only necessary thing you should do is adding the provider component. The reason is because I've
abstracted the context Provider inital value definition.

Like this, you can add the `<Provider>` component to your top level component and access the theme state
value or the `toggleMode` function in any child component.

I recommend using `React 16.8.0` at least so you can use hooks! 😌

```javascript
import Provider, { darkmodeContext } from 'react-dark-mode';

const Test = () => {
  const { mode, toggleMode } = useContext(darkmodeContext);

  return (
    <>
      I'm a component and I react to the theme change. I'm {mode}.
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
```

## Missing (TODO)
- Tests
