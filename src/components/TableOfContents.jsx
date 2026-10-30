import { useEffect, useState } from "react";
import { Circle } from "lucide-react";

export function TableOfContents({ headings, mobileOpen, onMobileToggle }) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    if (!headings.length || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, { rootMargin: "-100px 0px -65% 0px" });

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <>
      <div className="mobile-page-toolbar">
        <button type="button" onClick={() => onMobileToggle?.()} aria-label="Show table of contents">
          <span className="mobile-page-toolbar__menu">☰ <b>Menu</b></span>
          <span className="mobile-page-toolbar__toc">ON THIS PAGE <Circle size={14} /></span>
        </button>
      </div>
      <aside className={`table-of-contents ${mobileOpen ? "is-open" : ""}`} aria-label="On this page">
        <div className="table-of-contents__title">ON THIS PAGE <Circle size={14} /></div>
        <nav>
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`${activeId === heading.id ? "is-active" : ""} ${heading.level === 3 ? "is-nested" : ""}`}
              onClick={(event) => {
                event.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                onMobileToggle?.(false);
              }}
            >
              {heading.title}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
