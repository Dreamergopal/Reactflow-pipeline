import { useState } from "react";
import BaseNode from "../shared/baseNode";
import "./customCss/node.css"

export const ServerNode = ({ data }) => {
  const [key, setKey] = useState(data?.key ?? "");
  const [value, setValue] = useState(data?.value ?? "");
  const [status, setStatus] = useState("");

  function handelKeyChange(e) {
    setKey(e.target.value);
  }
  function handelValueChange(e) {
    setValue(e.target.value);
  }

  function handelSubmit() {
    if (key && value) {
      setStatus(`Saved successfully : "${key}" `);
    } else {
      setStatus("Key or Value missing");
    }
  }

  return (
    <BaseNode
      title="Server Node"
      inputs={["key", "value"]}
      outputs={["response"]}
    >
      <div className="node-container">
        <div className="node-section">
          <label htmlFor="key" className="node-label ">
            Key
          </label>
          <input
            type="text"
            value={key}
            onChange={handelKeyChange}
            placeholder="Enter key"
            className="node-input"
          />
        </div>

        <div className="node-section">
          <label htmlFor="value" className="node-label ">
            Value
          </label>
          <input
            type="text"
            value={value}
            onChange={handelValueChange}
            placeholder="Enter value"
            className="node-input"
          />
        </div>

        <div className="node-section">
          <p
            style={{
              minHeight: 20,
              color: status.includes("missing") ? "#f87171" : "#34d399",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {status}
          </p>
          <button
            onClick={handelSubmit}
            className="node-button"
            onMouseOver={(e) => {
              e.target.style.boxShadow = "0 0 20px rgba(139, 92, 246, 0.9)";
              e.target.style.transform = "scale(1.03)";
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = "0 0 12px rgba(139, 92, 246, 0.6)";
              e.target.style.transform = "scale(1)";
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </BaseNode>
  );
};
