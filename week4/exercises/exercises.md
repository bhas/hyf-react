

# Exercise 1 — Context

Run the app and click the theme toggle. `isDark` is passed as a prop from `App` down to `Navbar`, `Page`, `ArticleCard`, and `Heading` — even though `Page` doesn't actually use the value itself, it just passes it on. This is called **prop drilling**.

Your task is to refactor the app so that `isDark` is shared through a React context instead.

## 1.1 — Create the context

Create a new file that defines and exports a `ThemeContext`. This is what the rest of the app will read from and write to.

## 1.2 — Provide the context

In `App.jsx`, wrap the returned JSX in a context provider and pass `isDark` as the value. `App` should no longer need to pass `isDark` as a prop to any of its children.

## 1.3 — Consume the context

`Navbar`, `ArticleCard`, and `Heading` all currently receive `isDark` as a prop. Update each of them to read it from the context instead.

## 1.4 — Clean up

`Page` never used `isDark` directly — it only forwarded it. Remove the prop from `Page` entirely.

## Bonus

Move the `toggleTheme` function into the context as well, so `Navbar` no longer needs to receive `onToggle` as a prop.

---

# Exercise 2 — React Router

Run the app. You'll see that `Home` is rendered directly in `App.jsx`, while `About` and `Contact` are commented out. The navbar links all have `href="#"` and don't do anything.

Your task is to add React Router so each page lives at its own URL.

## 2.1 — Install and set up the router

Install `react-router-dom`, then wrap `<App />` in a `BrowserRouter` inside `main.jsx`.

## 2.2 — Define routes in App

In `App.jsx`, replace the hardcoded `<Home />` and other pages with a `<Routes>` block that maps a URL path to each of the three page components.
- turn the `/about` route into a parent route with `Team` and `Mission` as child routes at `/about/team` and `/about/mission`.


## 2.3 — Link the navbar

In `Navbar.jsx`, replace the `<a href="#">` tags with React Router's `<Link>` component so that clicking a link actually changes the URL.

## 2.4 — Link the sub-nav

Open `About.jsx`. You'll notice it now has a sub-nav with two links: "Our Team" and "Our Mission"  and a comment marking where the active subpage should appear. The two page components (`Team.jsx` and `Mission.jsx`) already exist in the `pages/` folder.
- Update the two `<a href="#">` links in the sub-nav to use the correct link.

## 2.5 — Highlight the active link

Swap `<Link>` for `<NavLink>`. Apply an `active` CSS class to the link that matches the current URL.

## Bonus

Add a catch-all route that renders a "404 — Page not found" component for any URL that doesn't match a defined route.

---

# Exercise 3 — UI Library (Material UI)

The app contains six independent component exercises. Each file uses plain HTML elements and CSS classes, and has a comment at the top listing exactly which MUI components to introduce.

## 3.0 — Installing Material UI (MUI)

Start by installing MUI:

Use the [Material UI documentation](https://mui.com/material-ui/) as your reference throughout.

## 3.1 — `Hero.jsx` — TextField, Button, Alert

The contact form uses a plain `<input>`, a `<textarea>`, and a `<button>`. Replace them with MUI equivalents. The success message should become an MUI `Alert`.

## 3.2 — `ProductSection.jsx` — RadioGroup, Checkbox, Select

The filter controls use native radio inputs, a checkbox, and a `<select>`. Replace each one with its MUI equivalent.

## 3.3 — `FeaturesSection.jsx` — Card, Avatar, Chip, Tooltip

The profile card uses a plain `<div>` for the avatar and `<span>` tags for the interest tags. Replace the outer container with an MUI `Card`, the avatar with `Avatar`, and the tags with `Chip`. Wrap one chip in a `Tooltip`.

## 3.4 — `TestimonialsSection.jsx` — Rating, Snackbar

The review form uses hand-built star buttons for the rating and a plain success `<div>`. Replace the stars with MUI `Rating` and the success message with a `Snackbar` containing an `Alert`.

## Bonus — `ThemeProvider`

Add a `<ThemeProvider>` in `App.jsx` to override MUI's default primary colour with `#6c63ff`.

## Bonus — `Footer.jsx` — Table, IconButton, Badge

The cart uses a plain `<table>` with `<button>` elements for quantity controls and removal. Replace the table with MUI table components, the buttons with `IconButton` (using icons from `@mui/icons-material`), and the item count with a `Badge` wrapping a cart icon. Uncomment `<CartItems />` in `App.jsx` when you're ready to start.


