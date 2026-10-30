# Markdown & React components

CMFRT documentation supports Markdown for written guides and React components for interactive previews. Component pages are regular JSX views, so controls behave like they do in an application.

## Markdown

Write headings, lists, links, tables, and fenced code blocks in Markdown. Code examples include syntax highlighting and a copy action.

```md
# Hello world

Use a heading, paragraph, or list to explain a feature.
```

## React previews

Use the Preview and Code tabs to switch between a live component and its JSX example. The component source is exported from the local UI library and can later be published as an npm package.

```jsx
import { Button } from "@cmfrt/ui";
import "@cmfrt/ui/styles.css";

<Button label="Continue" />
```
