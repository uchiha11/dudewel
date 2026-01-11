# Dudduel (Bespoke)

This repo contains a full‑stack Express + Vite React app. The frontend is built into `dist/public` and the server is bundled into `dist/index.cjs` for production.

Open the live frontend (GitHub Pages):

- https://uchiha11.github.io/dudewel

Quick local development

1. Install dependencies:

```zsh
npm install
```

2. Run the development server (Express + Vite middleware, with HMR):

```zsh
npm run dev
# open http://localhost:5000
```

Production build and run locally

```zsh
npm run build   # builds client and bundles server into dist/
npm start       # runs dist/index.cjs (prestart runs build automatically)
# open http://localhost:5000
```

Deploy notes

- GitHub Pages: this repo contains a GitHub Actions workflow to build the client and publish `dist/public` to the `gh-pages` branch. The published URL is listed above.
- Vercel: there is a `vercel.json` and `vercel-build` script. To deploy on Vercel, import this repository in the Vercel dashboard — Vercel will run `npm run vercel-build` and serve the static output from `dist/public`.

API / Backend

- The Express backend is not deployed to GitHub Pages or Vercel static hosting. If your frontend calls `/api` endpoints, host the backend on a Node host (Render, Railway, Fly, etc.) and update the client to point to that backend's URL.

If you want, I can:
- Trigger a test deployment to Vercel by committing a tiny change (you must connect the repo in Vercel), or
- Add a simple `README` entry with the backend URL after you deploy the server.

Enjoy!
