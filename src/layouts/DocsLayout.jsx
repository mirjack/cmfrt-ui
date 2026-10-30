import { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { getDocument } from "../data/docs.js";
import { apiNavigation, componentOverviewHeadings, componentPageMeta, guideNavigation } from "../data/navigation.js";
import { SearchDialog } from "../components/SearchDialog.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import { SiteHeader } from "../components/SiteHeader.jsx";
import { TableOfContents } from "../components/TableOfContents.jsx";

function readInitialTheme() {
  return window.localStorage.getItem("cmfrt-theme") === "dark" ? "dark" : "light";
}

export function DocsLayout() {
  const location = useLocation();
  const [theme, setTheme] = useState(readInitialTheme);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const pathname = location.pathname.replace(/\/$/, "") || "/";
  const documentPage = getDocument(pathname);
  const componentSlug = pathname.match(/^\/guide\/components\/([^/]+)$/)?.[1];
  const componentPage = componentSlug ? componentPageMeta[componentSlug] : null;
  const headings = documentPage?.path === "/guide/components"
    ? componentOverviewHeadings
    : documentPage?.headings ?? componentPage?.sections.map((section) => ({ ...section, level: 2 })) ?? [];
  const groups = pathname.startsWith("/api") ? apiNavigation : guideNavigation;

  const closeSearch = useCallback(() => setSearchOpen(false), []);
  const toggleSearch = useCallback(() => setSearchOpen((open) => !open), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("cmfrt-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.title = `${documentPage?.title ?? componentPage?.title ?? "CMFRT"}${documentPage || componentPage ? " - CMFRT" : ""}`;
    window.scrollTo(0, 0);
  }, [location.pathname, componentPage, documentPage]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleTheme = useCallback(() => setTheme((current) => current === "dark" ? "light" : "dark"), []);
  const toggleMobileToc = useCallback((next) => {
    setMobileTocOpen((current) => typeof next === "boolean" ? next : !current);
  }, []);

  const pageKey = useMemo(() => location.pathname, [location.pathname]);

  return (
    <div className="docs-app">
      <SiteHeader
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSearch={toggleSearch}
        onToggleSidebar={() => setSidebarOpen((open) => !open)}
      />
      <div className="docs-frame">
        <Sidebar groups={groups} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="docs-workspace">
          <TableOfContents
            key={pageKey}
            headings={headings}
            mobileOpen={mobileTocOpen}
            onMobileToggle={toggleMobileToc}
          />
          <main className="docs-main"><Outlet /></main>
        </div>
      </div>
      <SearchDialog open={searchOpen} onClose={closeSearch} />
    </div>
  );
}
