export const guideNavigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", path: "/guide/start/introduction" },
      { title: "Getting started", path: "/guide/start/getting-started" },
    ],
  },
  {
    title: "Markdown & MDX",
    items: [
      { title: "MDX & React components", path: "/guide/use-mdx/components" },
      {
        title: "Code blocks",
        path: "/guide/use-mdx/code-blocks",
        children: [
          { title: "Title", path: "/guide/use-mdx/code-blocks/title" },
          { title: "Meta", path: "/guide/use-mdx/code-blocks/meta" },
        ],
      },
      { title: "Container", path: "/guide/use-mdx/container" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Overview", path: "/guide/components" },
      { title: "Button", path: "/guide/components/button" },
      { title: "Input", path: "/guide/components/input" },
      { title: "OTP input", path: "/guide/components/otp-input" },
      { title: "Tooltip", path: "/guide/components/tooltip" },
      { title: "Sidebar", path: "/guide/components/sidebar" },
      { title: "Icons", path: "/guide/components/icons" },
    ],
  },
];

export const apiNavigation = [
  {
    title: "API",
    items: [
      { title: "Overview", path: "/api" },
      { title: "Commands", path: "/api/commands" },
    ],
  },
];

export const componentRoutes = [
  { slug: "button", title: "Button", category: "Actions", summary: "Clear action hierarchy, tone, and disabled states." },
  { slug: "input", title: "Input", category: "Forms", summary: "Text fields with validation, password, and phone states." },
  { slug: "otp-input", title: "OTP input", category: "Forms", summary: "Accessible one-time code entry with paste support." },
  { slug: "tooltip", title: "Tooltip", category: "Feedback", summary: "Short contextual hints on hover and keyboard focus." },
  { slug: "sidebar", title: "Sidebar", category: "Navigation", summary: "Flexible navigation rows, submenus, and empty states." },
  { slug: "icons", title: "Icons", category: "Foundations", summary: "A searchable set of 60 inline SVG icons." },
].map((item) => ({ ...item, path: `/guide/components/${item.slug}` }));

export const componentOverviewHeadings = ["Actions", "Forms", "Feedback", "Navigation", "Foundations"]
  .map((title) => ({ title, id: `group-${title.toLowerCase()}`, level: 2 }));

export const componentPageMeta = {
  button: { title: "Button", sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }] },
  input: { title: "Input", sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }] },
  "otp-input": { title: "OTP input", sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }] },
  tooltip: { title: "Tooltip", sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }] },
  sidebar: { title: "Sidebar", sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }] },
  icons: { title: "Icons", sections: [{ title: "Preview", id: "preview" }, { title: "Props", id: "props" }, { title: "Usage", id: "usage" }] },
};
