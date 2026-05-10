
# Exercise 1 — Create a Next.js project

Follow the [Next.js installation guide](https://nextjs.org/docs/getting-started/installation) to scaffold a new project.

- Run the project locally and confirm it opens in the browser
- Explore the generated files — what does each one do? (e.g. `layout.js`, `page.js`, `next.config.mjs`)
- Replace the contents of `page.js` with your own simple welcome screen (heading, short message, your name)

# Exercise 2 — Add sub-pages

Next.js uses a file-based router. Creating a file inside `app/` automatically creates a route.

1. Create a `/cats` page with a heading and 2–4 cat images
2. Create a `/dogs` page with a heading and 2–4 dog images
3. Add a `<Navbar>` component that links between `/`, `/cats`, and `/dogs`, and include it on both pages

> Tip: Use free placeholder images from [placecats.com](https://placecats.com) or [placedog.net](https://placedog.net).

# Exercise 3 — Style your pages

1. Apply **CSS Modules** to give each sub-page a unique look (different background color, etc.)
2. Add any shared base styles in the global stylesheet
3. Extend your pages with a few more elements — a footer, a caption under each image, etc.

# Exercise 4 — Deploy to Vercel

1. Create a free account on [Vercel](https://vercel.com)
2. Import your Next.js project and deploy it
3. Share the live URL with your classmates

---

# Exercise 5 — Fetch Mars Rover photos from NASA

In this exercise you will practice both client-side and server-side data fetching in Next.js.

## Setup — get a NASA API key

- Register for a free API key at [api.nasa.gov](https://api.nasa.gov)
- Use the [Mars Rover Photos endpoint](https://api.nasa.gov/#MarsPhotos) to fetch photos from **May 1st, 2025**
- Test the request in your browser before writing any code

## Sub-page `/client` — client-side rendering

- Create a new page at `app/client/page.js`
- Mark it as a Client Component with `"use client"` at the top
- Use the `useEffect` hook to fetch the NASA data when the component mounts
- Display each photo and its camera name as a caption

> Reference: [Client-side rendering in Next.js](https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering)

## Sub-page `/server` — server-side rendering

- Create a new page at `app/server/page.js`
- This is a **Server Component** (no `"use client"` needed) — fetch data directly in the component body using `async/await`
- Display the same photos and captions as in the client version
- Compare the two approaches: when does each one make sense?

> Reference: [Server-side rendering in Next.js](https://nextjs.org/docs/app/getting-started/fetching-data#with-the-fetch-api)

## Make a dynamic Sub-page `/server/{date}`

- Create a new page at `app/server/[date]/page.js` and use the same page as you had for the previous exercise. it should be accessible on `{url}/server/2025-12-24` and `{url}/server/2026-03-01`
- add a header containing the given date from the URL
- Adjust the page to display the image and captions for the given date
- Bonus: add error handling when providing future dates or invalid dates.