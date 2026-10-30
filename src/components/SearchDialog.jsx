import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search, X } from "lucide-react";
import { componentRoutes } from "../data/navigation.js";
import { searchablePages } from "../data/docs.js";

const searchEntries = [
  ...searchablePages,
  ...componentRoutes.map(({ path, title }) => ({ path, title, text: "CMFRT component preview JSX example" })),
];

export function SearchDialog({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const close = useCallback(() => {
    setQuery("");
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const handleKeyDown = (event) => event.key === "Escape" && close();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, close]);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return searchEntries.slice(0, 7);
    return searchEntries
      .filter((entry) => `${entry.title} ${entry.path} ${entry.text}`.toLowerCase().includes(normalizedQuery))
      .slice(0, 10);
  }, [query]);

  if (!open) return null;

  return (
    <div className="search-overlay" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <section className="search-dialog" role="dialog" aria-modal="true" aria-label="Search documentation">
        <div className="search-dialog__input-row">
          <Search size={19} />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search documentation..."
            aria-label="Search documentation"
          />
          <button type="button" onClick={close} aria-label="Close search"><X size={18} /></button>
        </div>
        <div className="search-results" role="listbox" aria-label="Search results">
          {results.map((result) => (
            <Link to={result.path} onClick={close} key={result.path} role="option">
              <span><b>{result.title}</b><small>{result.path}</small></span>
              <ArrowUpRight size={16} />
            </Link>
          ))}
          {!results.length && <p className="search-empty">No results. Try a different search.</p>}
        </div>
        <div className="search-dialog__footer"><kbd>Esc</kbd> to close <span>Searches pages and component examples</span></div>
      </section>
    </div>
  );
}
