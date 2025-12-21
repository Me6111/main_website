import React from "react";
import { InputField } from "./CodeShowcase";
import CodeBit from "../CodeBit/CodeBit";

const PropsEditor: React.FC<{ fields: InputField<any>[] }> = ({ fields }) => {
  const labelWidth = 150;
  const inputWidth = 200;

  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }}
    >
      {fields.map(({ name, value, setter, options, isNumber }, idx) => {
        const inactive = value === "" || value === undefined;
        const textColor = inactive ? "#555" : "#fff";

        const containerStyle: React.CSSProperties = {
          display: "flex",
          alignItems: "center",
          gap: "12px"
        };

        const inputStyle: React.CSSProperties = {
          width: inputWidth,
          padding: "6px 8px",
          borderRadius: "4px",
          border: "1px solid #333",
          backgroundColor: "#111",
          color: textColor,
          fontSize: "14px",
          boxSizing: "border-box"
        };

        return (
          <li key={idx} style={containerStyle}>
            <div style={{ width: labelWidth }}>
              <CodeBit text={String(name)} color={textColor} />
            </div>
            {options ? (
              <select
                value={value as any}
                onChange={(e) => {
                  const v = e.target.value;
                  setter(v === "" ? "" : v);
                }}
                style={inputStyle}
              >
                <option value=""></option>
                {options.map((opt) => (
                  <option key={opt} value={opt as any}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={isNumber ? "number" : "text"}
                value={value as any}
                onChange={(e) => {
                  const v = e.target.value;
                  setter(v === "" ? "" : isNumber ? Number(v) : v);
                }}
                style={inputStyle}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default PropsEditor;
