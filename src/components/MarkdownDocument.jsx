import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "../data/docs.js";
import { MarkdownPre } from "./CodeBlock.jsx";

function plainText(children) {
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(plainText).join("");
  if (children?.props?.children) return plainText(children.props.children);
  return "";
}

export function MarkdownDocument({ content }) {
  return (
    <article className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre: MarkdownPre,
          h2: ({ children, ...props }) => <h2 id={slugify(plainText(children))} {...props}>{children}</h2>,
          h3: ({ children, ...props }) => <h3 id={slugify(plainText(children))} {...props}>{children}</h3>,
          a: ({ href = "", children, ...props }) => href.startsWith("/")
            ? <Link to={href} {...props}>{children}</Link>
            : <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>,
          blockquote: ({ children }) => <blockquote className="doc-callout">{children}</blockquote>,
          table: ({ children }) => <div className="table-scroll"><table>{children}</table></div>,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
