import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({
  code,
  language = "text",
  title,
  showLineNumbers = false,
  wrap = false,
}) {
  const [copied, setCopied] = useState(false);
  const [highlighted, setHighlighted] = useState(code);

  useEffect(() => {
    let active = true;
    import("./highlighter.js").then(({ highlightCode }) => {
      if (active) setHighlighted(highlightCode(code, language));
    });
    return () => { active = false; };
  }, [code, language]);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  const lineCount = Math.max(1, code.split("\n").length);

  return (
    <div className={`code-block ${wrap ? "code-block--wrap" : ""}`}>
      <div className="code-block__header">
        <span>{title || language}</span>
        <button type="button" onClick={copyCode} aria-label={copied ? "Code copied" : "Copy code"}>
          {copied ? <Check size={15} /> : <Copy size={15} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre>
        <code className={showLineNumbers ? "has-line-numbers" : ""}>
          {showLineNumbers && (
            <span className="code-line-numbers" aria-hidden="true">
              {Array.from({ length: lineCount }, (_, index) => index + 1).join("\n")}
            </span>
          )}
          <span className="code-source" dangerouslySetInnerHTML={{ __html: highlighted }} />
        </code>
      </pre>
    </div>
  );
}

export function MarkdownPre({ children, node }) {
  const codeElement = Array.isArray(children) ? children[0] : children;
  const props = codeElement?.props ?? {};
  const code = typeof props.children === "string" ? props.children : "";
  const language = props.className?.match(/language-([\w-]+)/)?.[1] ?? "text";
  const meta = node?.data?.meta ?? "";
  const title = meta.match(/title=["']([^"']+)["']/)?.[1];
  const showLineNumbers = /lineNumbers/.test(meta);
  const wrap = /wrapCode/.test(meta);

  return <CodeBlock code={code} language={language} title={title} showLineNumbers={showLineNumbers} wrap={wrap} />;
}
