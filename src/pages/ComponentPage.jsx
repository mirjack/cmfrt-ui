import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { componentRoutes } from "../data/navigation.js";
import { CodeBlock } from "../components/CodeBlock.jsx";
import { ComponentPreview } from "../components/ComponentPreview.jsx";

export function ComponentPage() {
  const { slug } = useParams();
  const [example, setExample] = useState(null);

  useEffect(() => {
    let active = true;
    import("../data/componentExamples.jsx").then(({ componentExamples }) => {
      if (active) setExample(componentExamples[slug] ?? false);
    });
    return () => { active = false; };
  }, [slug]);

  if (example === null) return <div className="component-loading" aria-live="polite">Loading component preview…</div>;

  if (example === false) return <div className="not-found"><h1>Component not found</h1><Link to="/guide/components">Browse components</Link></div>;

  const usageHeading = example.sections.at(-1);
  const previewHeading = example.sections[0];
  const propsHeading = example.sections[1];
  const routeMeta = componentRoutes.find((route) => route.slug === slug);

  return (
    <article className="prose component-detail-page">
      <div className="component-page-eyebrow"><Link to="/guide/components">Components</Link><span>/</span>{routeMeta?.category ?? "CMFRT UI"}</div>
      <h1>{example.title}</h1>
      <p>{example.description}</p>
      <div className="component-page-meta"><span>Interactive preview</span><span>React · JSX</span></div>
      <h2 id={previewHeading.id}>{previewHeading.title}</h2>
      <ComponentPreview preview={example.preview} code={example.code} title={`${slug}.jsx`} />
      {propsHeading && example.api && (
        <>
          <h2 id={propsHeading.id}>{propsHeading.title}</h2>
          <div className="component-api-table-scroll">
            <table className="component-api-table">
              <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
              <tbody>
                {example.api.map((prop) => (
                  <tr key={prop.name}>
                    <td><code>{prop.name}</code></td><td><code>{prop.type}</code></td><td><code>{prop.default}</code></td><td>{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <h2 id={usageHeading.id}>{usageHeading.title}</h2>
      <p>Import the component and its styles, then pass the props that match your use case.</p>
      <CodeBlock code={example.code} language="jsx" title={`${slug}.jsx`} />
    </article>
  );
}
