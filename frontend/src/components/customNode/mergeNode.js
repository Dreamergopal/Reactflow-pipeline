import { useState, useCallback } from "react";
import BaseNode from "../shared/baseNode";
import "./customCss/node.css"


export const JoinNode = ({ data }) => {
  const [inputA, setInputA] = useState(data?.inputA ?? "");
  const [inputB, setInputB] = useState(data?.inputB ?? "");
  const [inputC, setInputC] = useState(data?.inputC ?? "");
  const [separator, setSeparator] = useState(data?.separator ?? "-");

  const merger = useCallback(() => {
    const joinedValue = [inputA, inputB, inputC]
      .filter(Boolean)
      .join(separator);
    return joinedValue;
  }, [inputA, inputB, inputC, separator]);

  return (
    <BaseNode
      title="Merge Node"
      inputs={["inputA", "inputB", "inputC"]}
      outputs={["merged"]}
    >
      <div className="node-container">
        <div className="node-section">
          <label className="node-label">Input A</label>
          <input
            value={inputA}
            onChange={(e) => setInputA(e.target.value)}
            placeholder="Value A"
            className="node-input"
          />
        </div>

        <div className="node-section">
          <label className="node-label">Input B</label>
          <input
            value={inputB}
            onChange={(e) => setInputB(e.target.value)}
            placeholder="Value B"
            className="node-input"
          />
        </div>

        <div className="node-section">
          <label className="node-label">Input C</label>
          <input
            value={inputC}
            onChange={(e) => setInputC(e.target.value)}
            placeholder="Value C"
            className="node-input"
          />
        </div>

        <div className="node-section">
          <label className="node-label">Separator</label>
          <input
            value={separator}
            onChange={(e) => setSeparator(e.target.value)}
            placeholder="-"
            className="node-input"
          />
        </div>

        <div style={{ fontWeight: "bold", fontSize: 15, color: "#34d399" }}>
          Result: {merger()}
        </div>
      </div>
    </BaseNode>
  );
};
