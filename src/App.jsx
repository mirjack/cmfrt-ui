import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { DocsLayout } from "./layouts/DocsLayout.jsx";
import { DocumentPage } from "./pages/DocumentPage.jsx";
import { ComponentPage } from "./pages/ComponentPage.jsx";
import { ComponentsOverviewPage } from "./pages/ComponentsOverviewPage.jsx";
import { documentationPages } from "./data/docs.js";

function LegacyRouteRedirect() {
  const location = useLocation();
  if (!/\.html$/.test(location.pathname)) {
    return <article className="prose not-found"><h1>Page not found</h1><p>The page you requested does not exist.</p></article>;
  }
  const normalizedPath = location.pathname
    .replace(/\/index\.html$/, "")
    .replace(/\.html$/, "");
  return <Navigate to={normalizedPath || "/"} replace />;
}

function DocumentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/guide/start/introduction" replace />} />
      <Route element={<DocsLayout />}>
        {documentationPages
          .filter((page) => page.path !== "/guide/components")
          .map((page) => <Route key={page.path} path={page.path} element={<DocumentPage />} />)}
        <Route path="/guide/components" element={<ComponentsOverviewPage />} />
        <Route path="/guide/components/:slug" element={<ComponentPage />} />
        <Route path="*" element={<LegacyRouteRedirect />} />
      </Route>
    </Routes>
  );
}

function App() {
  return <BrowserRouter><DocumentRoutes /></BrowserRouter>;
}

export default App;
