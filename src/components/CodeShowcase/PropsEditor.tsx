import React from "react";
import { Props as ArrowProps } from "../Icons/Arrow/Arrow";

export type InputSetter<T> = (value: T | "") => void;

export interface InputField<T> {
  name: keyof ArrowProps;
  type: "number" | "string";
  value: T | "";
  setter: InputSetter<T>;
}

const PropsEditor: React.FC<{ fields: InputField<any>[] }> = ({ fields }) => {
  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "6px 8px",
    borderRadius: "4px",
    border: "1px solid #333",
    backgroundColor: "#111",
    color: "#fff",
    fontSize: "14px",
    boxSizing: "border-box"
  };

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ padding: "8px", color: "#aaa", textAlign: "left" }}>Name</th>
          <th style={{ padding: "8px", color: "#aaa", textAlign: "left" }}>Type</th>
          <th style={{ padding: "8px", color: "#aaa", textAlign: "left" }}>Value</th>
        </tr>
      </thead>
      <tbody>
        {fields.map(({ name, type, value, setter }, idx) => (
          <tr key={idx}>
            <td style={{ padding: "8px" }}>{String(name)}</td>
            <td style={{ padding: "8px" }}>{type}</td>
            <td style={{ padding: "8px" }}>
              <input
                type={type}
                value={value}
                style={inputStyle}
                onChange={(e) => {
                  const v = e.target.value;
                  setter(type === "number" ? (v === "" ? "" : Number(v)) : v);
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropsEditor;
