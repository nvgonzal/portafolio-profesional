# Portafolio

Personal portfolio of Nicolás González, built with Next.js (App Router) and plain CSS.

## Run

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

The site is served at <http://localhost:3000>.

## Build

```bash
npm run lint
npm run build
npm start
```

## Edit content

All copy lives in `src/content/portfolio.ts`, separate from the components in `src/components`. Styles and design tokens live in `src/app/globals.css`.

To add a verified result to a case study, set its optional `outcome` field. To add a project demo, set its optional `demoUrl`. Both render only when present.

## Enable the CV button

Place a PDF in `public/` and set `cvUrl` in `src/content/portfolio.ts`, for example:

```ts
export const cvUrl: string | null = "/cv.pdf";
```

The button stays hidden while `cvUrl` is `null`. The PDF must not contain a phone number.
