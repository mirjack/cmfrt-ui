import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Moon, Search, Sun } from "lucide-react";

export function SiteHeader({ theme, onToggleTheme, onOpenSearch, onToggleSidebar }) {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <div className="site-header__left">
        <button type="button" className="mobile-menu-button" onClick={onToggleSidebar} aria-label="Open menu">
          <Menu size={20} />
        </button>
        <Link className="site-brand" to="/guide/start/introduction">CMFRT</Link>
      </div>
      <div className="site-header__right">
        <button type="button" className="search-trigger" onClick={onOpenSearch}>
          <Search size={17} />
          <span>Search</span>
          <kbd>Ctrl K</kbd>
        </button>
        <nav className="top-navigation" aria-label="Main navigation">
          <NavLink to="/guide/start/introduction" className={pathname.startsWith("/guide") ? "is-active" : ""}>Guide</NavLink>
          <NavLink to="/api" className={pathname.startsWith("/api") ? "is-active" : ""}>API</NavLink>
        </nav>
        <span className="header-divider" aria-hidden="true" />
        <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}
