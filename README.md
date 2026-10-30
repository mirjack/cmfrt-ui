# CMFRT Documentation

CMFRT is a lightweight documentation site built with Vite, React, JavaScript, and JSX. It keeps the existing CMFRT/Rspress-inspired documentation layout while making each reusable UI component available on its own page.

## Start locally

```bash
npm install
npm run dev
```

Vite prints the local URL in the terminal. The root route redirects to `/guide/start/introduction`.

## Build

```bash
npm run build
npm run preview
```

## Project map

- `src/components/` contains the shared documentation UI and reusable CMFRT UI components.
- `src/data/content/` contains the Markdown documentation.
- `src/data/componentExamples.jsx` defines each component page's live preview and JSX example.
- `src/layouts/DocsLayout.jsx` keeps the shared header, sidebar, search, theme, and table of contents.
