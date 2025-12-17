import React, { useState, useEffect } from "react";
import Arrow from "../Icons/Arrow/Arrow";
import CodeBlock from "./CodeBlock";
import PropsEditor, { InputField } from "./PropsEditor";

const CodeShowcase: React.FC = () => {
  const [width, setWidth] = useState<number | "">(50);
  const [height, setHeight] = useState<number | "">(30);
  const [fillColor, setFillColor] = useState("red");
  const [strokeColor, setStrokeColor] = useState("white");
  const [strokeWidth, setStrokeWidth] = useState<number | "">(0.25);
  const [rotate, setRotate] = useState<string | number>("top");
  const [notch, setNotch] = useState<number | "">(0);
  const [transition, setTransition] = useState<number | "">(0.25);
  const [code, setCode] = useState("");

  const fields: InputField<any>[] = [
    { name: "width", type: "number", value: width, setter: setWidth },
    { name: "height", type: "number", value: height, setter: setHeight },
    { name: "fillColor", type: "string", value: fillColor, setter: setFillColor },
    { name: "strokeColor", type: "string", value: strokeColor, setter: setStrokeColor },
    { name: "strokeWidth", type: "number", value: strokeWidth, setter: setStrokeWidth },
    { name: "rotate", type: "string", value: rotate, setter: setRotate },
    { name: "notch", type: "number", value: notch, setter: setNotch },
    { name: "transition", type: "number", value: transition, setter: setTransition }
  ];

  useEffect(() => {
    const props: string[] = [];
    if (width !== "") props.push(`width={${width}}`);
    if (height !== "") props.push(`height={${height}}`);
    if (fillColor) props.push(`fillColor="${fillColor}"`);
    if (strokeColor) props.push(`strokeColor="${strokeColor}"`);
    if (strokeWidth !== "") props.push(`strokeWidth={${strokeWidth}}`);
    if (rotate !== "") props.push(`rotate={${typeof rotate === "number" ? rotate : `"${rotate}"`}}`);
    if (notch !== "") props.push(`notch={${notch}}`);
    if (transition !== "") props.push(`transition={${transition}}`);
    setCode(`<Arrow ${props.join(" ")} />`);
  }, [width, height, fillColor, strokeColor, strokeWidth, rotate, notch, transition]);

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: "24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gap: "24px" }}>
        <h2>Arrow Playground</h2>
        <div style={{ height: "160px", border: "1px solid #222", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Arrow
            width={width === "" ? undefined : width}
            height={height === "" ? undefined : height}
            fillColor={fillColor}
            strokeColor={strokeColor}
            strokeWidth={strokeWidth === "" ? undefined : strokeWidth}
            rotate={rotate as any}
            notch={notch === "" ? undefined : notch}
            transition={transition === "" ? undefined : transition}
          />
        </div>
        <div style={{ display: "grid", gap: "24px" }}>
          <PropsEditor fields={fields} />
          <CodeBlock code={code} language="tsx" />
        </div>
      </div>
    </div>
  );
};

export default CodeShowcase;
