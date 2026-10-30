# Getting started

CMFRT UI is maintained alongside this documentation site. Its React components and styles live in the Vite application under `src/components/ui`.

## Install

After the package is published, install it in a React project:

```bash
npm install @cmfrt/ui
```

## Import a component

Import the component and its stylesheet once in your application entry point:

```jsx
import { Button } from "@cmfrt/ui";
import "@cmfrt/ui/styles.css";

function SaveButton() {
  return <Button label="Save changes" tone="positive" />;
}
```

## Run this documentation site

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and serve the generated `dist/` directory with your static host.
