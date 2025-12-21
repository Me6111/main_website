import React, { useState, useEffect } from "react";
import CodeBlock from "./CodeBlock";
import PropsEditor from "./PropsEditor";

export type InputSetter<T> = (value: T | "") => void;

export interface InputField<T> {
  name: string;
  value: T | "";
  setter: InputSetter<T>;
  options?: (string | number)[];
  isNumber?: boolean;
}

interface CodeShowcaseProps<T> {
  component: React.ComponentType<T>;
  exampleProps: T;
  propOptions?: { [K in keyof T]?: (string | number)[] };
}

const CodeShowcase = <T extends {}>({
  component: Component,
  exampleProps,
  propOptions = {}
}: CodeShowcaseProps<T>) => {
  const schema: InputField<any>[] = Object.entries(exampleProps).map(([key, value]) => ({
    name: key,
    value,
    setter: () => {},
    isNumber: typeof value === "number",
    options: propOptions[key as keyof T] || undefined
  }));

  const [propsState, setPropsState] = useState<Partial<T>>({});

  useEffect(() => {
    setPropsState(Object.fromEntries(schema.map((f) => [f.name, f.value])));
  }, [exampleProps, Component]);

  const fields: InputField<any>[] = schema.map((field) => ({
    ...field,
    setter: (value: any) => setPropsState((prev) => ({ ...prev, [field.name]: value })),
    value: propsState[field.name] ?? ""
  }));

  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const propStrings = Object.entries(propsState)
      .filter(([, v]) => v !== "" && v !== undefined)
      .map(([key, value]) =>
        typeof value === "string" ? `${key}="${value}"` : `${key}={${value}}`
      );
    const componentName = Component.displayName || Component.name || "Component";
    setCode(`<${componentName}\n  ${propStrings.join("\n  ")}\n/>`);
  }, [propsState, Component]);

  return (
    <div className="CodeShowcase" style={{ height: "100%", width: "100%", background: "#000", color: "#fff" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "24px" }}>
        <h2>{Component.displayName || Component.name}</h2>
        <div style={{ display: "flex", gap: "24px" }}>
          <div
            style={{
              flex: 1,
              border: "1px solid #222",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "360px"
            }}
          >
            <Component {...(propsState as T)} />
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
            <button
              onClick={() => setShowCode(!showCode)}
              style={{
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid #555",
                backgroundColor: "#111",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              {showCode ? "Show Settings" : "Show Code"}
            </button>
            <div style={{ flex: 1, overflowY: "auto" }}>
              {showCode ? <CodeBlock code={code} language="tsx" /> : <PropsEditor fields={fields} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeShowcase;
