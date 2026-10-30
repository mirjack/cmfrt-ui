import introduction from "./content/introduction.md?raw";
import gettingStarted from "./content/getting-started.md?raw";
import markdownComponents from "./content/mdx-components.md?raw";
import containers from "./content/container.md?raw";
import codeBlocks from "./content/code-blocks.md?raw";
import codeTitle from "./content/code-title.md?raw";
import codeOptions from "./content/code-meta.md?raw";
import apiOverview from "./content/api-index.md?raw";
import apiCommands from "./content/api-commands.md?raw";

export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getHeadings(markdown) {
  return markdown
    .split("\n")
    .map((line) => line.match(/^(#{2,3})\s+(.+)$/))
    .filter(Boolean)
    .map(([, marks, title]) => ({
      title: title.replace(/`/g, ""),
      id: slugify(title.replace(/`/g, "")),
      level: marks.length,
    }));
}

export const documentationPages = [
  { path: "/guide/start/introduction", title: "Introduction", section: "Guide", content: introduction },
  { path: "/guide/start/getting-started", title: "Getting started", section: "Guide", content: gettingStarted },
  { path: "/guide/use-mdx/components", title: "MDX & React components", section: "Guide", content: markdownComponents },
  { path: "/guide/use-mdx/code-blocks", title: "Code blocks", section: "Guide", content: codeBlocks },
  { path: "/guide/use-mdx/code-blocks/title", title: "Title", section: "Guide", content: codeTitle },
  { path: "/guide/use-mdx/code-blocks/meta", title: "Meta", section: "Guide", content: codeOptions },
  { path: "/guide/use-mdx/container", title: "Container", section: "Guide", content: containers },
  { path: "/guide/components", title: "Components", section: "Guide", content: "# Components\n\nBrowse the CMFRT component pages to explore live previews and usage examples." },
  { path: "/api", title: "API Overview", section: "API", content: apiOverview },
  { path: "/api/commands", title: "Commands", section: "API", content: apiCommands },
].map((page) => ({ ...page, headings: getHeadings(page.content) }));

export function getDocument(pathname) {
  return documentationPages.find((page) => page.path === pathname) ?? null;
}

export const searchablePages = documentationPages.map(({ path, title, content }) => ({
  path,
  title,
  text: content,
}));
