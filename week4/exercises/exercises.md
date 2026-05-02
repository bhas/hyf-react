

# Class Exercise 1 - Context

## The problem with prop drilling

Run the app and click the theme toggle. You will see the `isDark` value flowing from `App` all the way down the component tree:

```
App  (owns isDark state)
├── Navbar       ← receives isDark + onToggle
└── Page         ← receives isDark
    └── ArticleCard  ← receives isDark
```

Every component in the middle of the tree must accept and forward the `isDark` prop, even if it doesn't use the value itself — this is called **prop drilling**.

---

## Your task: replace prop drilling with Context

Refactor the app so that `isDark` is provided through a React context instead of being passed as a prop.

### Steps

1. **Create a `ThemeContext`**  
   In a new file `ThemeContext.jsx`, create and export a context:
   ```jsx
   import { createContext } from 'react';
   export const ThemeContext = createContext();
   ```

2. **Provide the context in `App`**  
   Wrap the JSX in `App.jsx` with `<ThemeContext.Provider value={isDark}>`.  
   You no longer need to pass `isDark` as a prop to `Navbar` or `Page`.

3. **Consume the context in leaf components**  
   In `Navbar.jsx` and `ArticleCard.jsx`, replace the `isDark` prop with:
   ```jsx
   import { useContext } from 'react';
   import { ThemeContext } from './ThemeContext.jsx';

   const isDark = useContext(ThemeContext);
   ```

4. **Clean up the middle components**  
   Remove `isDark` from the props of `Page` (it only forwarded it, it never needed it).

### Bonus
- Move the toggle function into the context too, so `Navbar` can call it without receiving `onToggle` as a prop.  
  Hint: you will need to change the context value from a single boolean to an object: `{ isDark, toggleTheme }`.


