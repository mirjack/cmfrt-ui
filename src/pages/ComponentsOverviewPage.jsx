import { Link } from "react-router-dom";
import { ArrowRight, Blocks, KeyRound, MessageCircle, MousePointer2, PanelLeft, Shapes, TextCursorInput } from "lucide-react";
import { componentRoutes } from "../data/navigation.js";

const categoryGroups = [
  { title: "Actions", description: "Controls for clear and confident actions.", icon: MousePointer2 },
  { title: "Forms", description: "Inputs for everyday data and verification.", icon: TextCursorInput },
  { title: "Feedback", description: "Small contextual guidance at the right moment.", icon: MessageCircle },
  { title: "Navigation", description: "Patterns that help people move through a product.", icon: PanelLeft },
  { title: "Foundations", description: "Shared visual assets used across CMFRT.", icon: Shapes },
];

const componentIcons = {
  button: MousePointer2,
  input: TextCursorInput,
  "otp-input": KeyRound,
  tooltip: MessageCircle,
  sidebar: PanelLeft,
  icons: Shapes,
};

export function ComponentsOverviewPage() {
  return (
    <article className="prose component-index-page">
      <header className="component-library-heading">
        <div className="component-library-eyebrow"><Blocks size={14} /> CMFRT UI · Component library</div>
        <h1>Components</h1>
        <p>Production-ready React building blocks, with live examples and practical API notes for each component.</p>
        <div className="component-library-stats" aria-label="Library summary">
          <span><b>{componentRoutes.length}</b> components</span>
          <span><b>60</b> SVG icons</span>
          <span>React · JSX</span>
        </div>
      </header>
      {categoryGroups.map((group) => {
        const items = componentRoutes.filter((item) => item.category === group.title);
        if (!items.length) return null;
        const CategoryIcon = group.icon;
        return (
          <section className="component-library-group" key={group.title} aria-labelledby={`group-${group.title.toLowerCase()}`}>
            <div className="component-library-group__heading">
              <h2 id={`group-${group.title.toLowerCase()}`}>{group.title}</h2>
              <span>{group.description}</span>
            </div>
            <div className="component-index-grid">
              {items.map((item) => {
                const ComponentIcon = componentIcons[item.slug] ?? CategoryIcon;
                return (
                  <Link className="component-index-card" key={item.path} to={item.path}>
                    <span className="component-index-card__icon"><ComponentIcon size={18} strokeWidth={1.8} /></span>
                    <span className="component-index-card__body">
                      <span className="component-index-card__title-row">
                        <strong>{item.title}</strong><small className="component-index-card__category">{item.category}</small>
                      </span>
                      <small>{item.summary}</small>
                    </span>
                    <ArrowRight className="component-index-card__arrow" size={16} />
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </article>
  );
}
