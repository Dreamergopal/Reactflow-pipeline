
import { useCallback, useState } from "react";
import BaseNode from "../shared/baseNode";
import "./customCss/node.css"


export const MathNode = ({ data }) => {
  const [operand1, setOperand1] = useState(data?.operand1 || 0);
  const [operand2, setOperand2] = useState(data?.operand2 || 0);
  const [operation, setOperation] = useState(data?.operation || "add");

  const operationResult = useCallback(() => {
    const num1 = Number(operand1);
    const num2 = Number(operand2);
    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num1 / num2;
      default:
        return 0;
    }
  }, [operand1, operand2, operation]);

  return (
    <BaseNode title="Math Node" inputs={["a", "b"]} outputs={["result"]}>
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
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </div>

        <div
          style={{
            fontWeight: "bold",
            fontSize: "15px",
            color: "#34d399",
            marginTop: 4,
          }}
        >
          Result: {operationResult()}
        </div>
      </div>
    </BaseNode>
  );
};
