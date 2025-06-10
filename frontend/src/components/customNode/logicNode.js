
import { useCallback, useState } from "react";
import BaseNode from "../shared/baseNode";
import "./customCss/node.css"

export const LogicNode = ({ data }) => {
  const [operand1, setOperand1] = useState(data?.operand1 ?? 0);
  const [operand2, setOperand2] = useState(data?.operand2 ?? 0);
  const [operation, setOperation] = useState(data?.operation ?? "==");

  const logicResult = useCallback(() => {
    const a = parseFloat(operand1);
    const b = parseFloat(operand2);

    switch (operation) {
      case "==":
        return a === b;
      case "!=":
        return a !== b;
      case ">":
        return a > b;
      case "<":
        return a < b;
      case ">=":
        return a >= b;
      case "<=":
        return a <= b;
      default:
        return false;
    }
  }, [operand1, operand2, operation]);

  return (
    <BaseNode title="Logic Node" inputs={["a", "b"]} outputs={["result"]}>
      <div className="node-container">
        <div className="node-section">
          <label className="node-label">Operand A</label>
          <input
            value={operand1}
            onChange={(e) => setOperand1(e.target.value)}
            placeholder="Enter A"
            className="node-input"
          />
        </div>

        <div className="node-section">
          <label className="node-label">Operand B</label>
          <input
            value={operand2}
            onChange={(e) => setOperand2(e.target.value)}
            placeholder="Enter B"
            className="node-input"
          />
        </div>

        <div className="node-section">
          <label className="node-label">Operation</label>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="node-select"
          >
            <option value="==">==</option>
            <option value="!=">!=</option>
            <option value=">">&gt;</option>
            <option value="<">&lt;</option>
            <option value=">=">&gt;=</option>
            <option value="<=">&lt;=</option>
          </select>
        </div>

        <div
          style={{
            marginTop: 8,
            fontWeight: "bold",
            fontSize: "15px",
            color: logicResult() ? "#34d399" : "#f87171",
          }}
        >
          Result: {String(logicResult())}
        </div>
      </div>
    </BaseNode>
  );
};
