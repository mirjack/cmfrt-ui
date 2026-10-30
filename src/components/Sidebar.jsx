import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

function SidebarLink({ item, closeMobile }) {
  return (
    <NavLink
      to={item.path}
      onClick={closeMobile}
      className={({ isActive }) => `sidebar-link ${isActive ? "is-active" : ""}`}
      end
    >
      {item.title}
    </NavLink>
  );
}

function SidebarGroup({ group, closeMobile }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(true);

  return (
    <section className="sidebar-group">
      <h2 className="sidebar-group__title">{group.title}</h2>
      {group.items.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const containsActiveChild = item.children?.some((child) => child.path === location.pathname);

        return (
          <div className="sidebar-item-group" key={item.path}>
            <div className="sidebar-item-group__row">
              <SidebarLink item={item} closeMobile={closeMobile} />
              {hasChildren && (
                <button
                  type="button"
                  className={`sidebar-expand ${expanded ? "is-expanded" : ""}`}
                  onClick={() => setExpanded((value) => !value)}
                  aria-label={`${expanded ? "Collapse" : "Expand"} ${item.title}`}
                  aria-expanded={expanded}
                >
                  <ChevronDown size={15} />
                </button>
              )}
            </div>
            {hasChildren && expanded && (
              <div className={`sidebar-children ${containsActiveChild ? "has-active-child" : ""}`}>
                {item.children.map((child) => <SidebarLink key={child.path} item={child} closeMobile={closeMobile} />)}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export function Sidebar({ groups, open, onClose }) {
  return (
    <>
      <button
        type="button"
        className={`sidebar-backdrop ${open ? "is-visible" : ""}`}
        aria-label="Close menu"
        onClick={onClose}
      />
      <aside className={`docs-sidebar ${open ? "is-open" : ""}`} aria-label="Documentation navigation">
        {groups.map((group) => <SidebarGroup key={group.title} group={group} closeMobile={onClose} />)}
      </aside>
    </>
  );
}
