

# Class Exercise 2 - React Router

## The problem with manual navigation

Run the app and click the navbar links. Navigation works, but it's implemented with a `currentPage` state variable and an `onNavigate` callback passed as props:

```
App  (owns currentPage state)
└── Navbar  ← receives currentPage + onNavigate
```

Problems with this approach:
- The browser URL never changes — you can't share or bookmark a specific page
- The browser's back/forward buttons don't work
- Every new "page" requires a new `case` in `App`

---

## Your task: replace manual navigation with React Router

Refactor the app to use React Router so each page has its own URL.

### Steps

1. **Wrap your app in a Router**  
   In `main.jsx`, import `BrowserRouter` and wrap `<App />`:
   ```jsx
   import { BrowserRouter } from 'react-router-dom';

   <BrowserRouter>
     <App />
   </BrowserRouter>
   ```

2. **Define routes in `App`**  
   Replace the `currentPage` state and the `pages` lookup with `<Routes>` and `<Route>`:
   ```jsx
   import { Routes, Route } from 'react-router-dom';

   <div className="app">
     <Navbar />
     <Routes>
       <Route path="/"        element={<Home />} />
       <Route path="/about"   element={<About />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
   </div>
   ```
   You can now remove the `currentPage` state, `onNavigate`, and the `pages` object entirely.

3. **Use `<Link>` in the Navbar**  
   Replace the `<a href="#">` tags and the `onNavigate` calls with React Router's `<Link>`:
   ```jsx
   import { Link } from 'react-router-dom';

   <Link className="navbar__link" to="/about">About</Link>
   ```
   Remove the `currentPage` and `onNavigate` props from `Navbar` — it no longer needs them.

4. **Highlight the active link**  
   Swap `<Link>` for `<NavLink>`, which automatically adds an `active` class when the route matches:
   ```jsx
   import { NavLink } from 'react-router-dom';

   <NavLink className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`} to="/about">
     About
   </NavLink>
   ```

### Bonus
- Add a catch-all route that renders a "404 - Page not found" component for any unknown URL:
  ```jsx
  <Route path="*" element={<NotFound />} />
  ```

---

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


