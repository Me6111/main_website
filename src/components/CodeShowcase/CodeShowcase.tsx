import React, { useState, useEffect } from "react";
import CodeBlock from "../CodeBlock/CodeBlock";
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
  propOptions = {},
}: CodeShowcaseProps<T>) => {
  const schema: InputField<any>[] = Object.entries(exampleProps).map(
    ([key, value]) => ({
      name: key,
      value,
      setter: () => {},
      isNumber: typeof value === "number",
      options: propOptions[key as keyof T],
    })
  );

  const [propsState, setPropsState] = useState<Partial<T>>({});
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth >= 1024
  );

  useEffect(() => {
    setPropsState(Object.fromEntries(schema.map((f) => [f.name, f.value])));
  }, [exampleProps, Component]);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const fields: InputField<any>[] = schema.map((field) => ({
    ...field,
    value: propsState[field.name] ?? "",
    setter: (value: any) =>
      setPropsState((prev) => ({ ...prev, [field.name]: value })),
  }));

  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    const componentName =
      Component.displayName || Component.name || "Component";

    const propStrings = Object.entries(propsState)
      .filter(([, v]) => v !== "" && v !== undefined)
      .map(([key, value]) =>
        typeof value === "string"
          ? `${key}="${value}"`
          : `${key}={${value}}`
      );

    setCode(`<${componentName}\n  ${propStrings.join("\n  ")}\n/>`);
  }, [propsState, Component]);

  return (
    <div
      className="CodeShowcase"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#000",
        color: "#fff",
      }}
    >
      <div
        className="CodeShowcase_Header"
        style={{
          flex: "0 0 10%",
          display: "flex",
          alignItems: "center",
          padding: "16px 24px",
          borderBottom: "1px solid #222",
        }}
      >
        <h2 className="CodeShowcase_Title" style={{ margin: 0 }}>
          {Component.displayName || Component.name}
        </h2>
      </div>

      <div
        className="CodeShowcase_Content"
        style={{
          flex: "1 1 90%",
          display: "flex",
          flexDirection: isDesktop ? "row" : "column",
          gap: "24px",
          padding: "24px",
          overflow: "hidden",
        }}
      >
        <div
          className="CodeShowcase_RenderPreview"
          style={{
            width: isDesktop ? "50%" : "100%",
            height: isDesktop ? "100%" : "50%",
            border: "1px solid #222",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "auto",
          }}
        >
          <Component {...(propsState as T)} />
        </div>

        <div
          className="CodeShowcase_SidePanel"
          style={{
            width: isDesktop ? "50%" : "100%",
            height: isDesktop ? "100%" : "50%",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            overflow: "hidden",
          }}
        >
          <button
            className="CodeShowcase_ToggleButton"
            onClick={() => setShowCode((v) => !v)}
            style={{
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #555",
              backgroundColor: "#111",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {showCode ? "Show Settings" : "Show Code"}
          </button>

          <div
            className="CodeShowcase_PanelContent"
            style={{ flex: 1, overflow: "auto" }}
          >
            {showCode ? (
              <div className="CodeShowcase_CodePreview">
                <CodeBlock code={code} language="tsx" />
              </div>
            ) : (
              <div className="CodeShowcase_PropsPreview">
                <PropsEditor fields={fields} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeShowcase;
