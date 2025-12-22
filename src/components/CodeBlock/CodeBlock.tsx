import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "../Buttons/CopyButton/CopyButton";

interface CodeBlockProps {
  code: string | unknown;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const safeCode = typeof code === "string" ? code.trim() : "";

  return (
    <div
      className="CodeBlock"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #333",
        borderRadius: "4px",
        background: "#1e1e1e",
        fontSize: "0.9rem",
        overflow: "hidden",
      }}
    >
      <div
        className="CodeBlock_Header"
        style={{
          flex: "0 0 auto",
          background: "#1e1e1e",
          color: "#ccc",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6px 12px",
          fontFamily: "monospace",
          userSelect: "none",
          whiteSpace: "nowrap",
          borderBottom: "1px solid #333",
        }}
      >
        <span
          style={{
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: "0.75rem",
          }}
        >
          {language}
        </span>
        <CopyButton textToCopy={safeCode} size={18} />
      </div>

      <div
        className="CodeBlock_Code"
        style={{
          flex: "1 1 auto",
          overflowY: "auto",
          width: "100%",
        }}
      >
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "#1e1e1e",
            width: "100%",
            height: "100%",
          }}
          codeTagProps={{
            style: {
              whiteSpace: "pre",
              display: "inline-block",
              minWidth: "100%",
            },
          }}
        >
          {safeCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
