import { useState } from "react";
import { Code2, Eye } from "lucide-react";
import { CodeBlock } from "./CodeBlock.jsx";

export function ComponentPreview({ preview, code, language = "jsx", title }) {
  const [activeTab, setActiveTab] = useState("preview");

  return (
    <section className="component-example">
      <div className="component-example__tabs" role="tablist" aria-label="Example view">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "preview"}
          className={activeTab === "preview" ? "is-active" : ""}
          onClick={() => setActiveTab("preview")}
        >
          <Eye size={16} /> Preview
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "code"}
          className={activeTab === "code" ? "is-active" : ""}
          onClick={() => setActiveTab("code")}
        >
          <Code2 size={16} /> Code
        </button>
      </div>
      {activeTab === "preview" ? (
        <div className="component-live-preview" role="tabpanel">{preview}</div>
      ) : (
        <div className="component-example__code" role="tabpanel">
          <CodeBlock code={code} language={language} title={title || language} />
        </div>
      )}
    </section>
  );
}
