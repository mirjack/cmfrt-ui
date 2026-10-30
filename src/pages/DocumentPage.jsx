import { useLocation } from "react-router-dom";
import { getDocument } from "../data/docs.js";
import { MarkdownDocument } from "../components/MarkdownDocument.jsx";

export function DocumentPage() {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, "") || "/";
  const page = getDocument(pathname);

  if (!page) return <div className="not-found"><h1>Page not found</h1><p>This documentation page does not exist.</p></div>;
  return <MarkdownDocument content={page.content} />;
}
