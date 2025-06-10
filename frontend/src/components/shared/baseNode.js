import { Handle, Position } from "reactflow";

const BaseNode = ({ title, children, inputs = [], outputs = [] }) => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#3b0764",
        borderRadius: 12,
        border: "1px solid #9333ea",
        boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)",
        padding: 16,
        color: "#fff",
        minWidth: 240,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {title && (
        <div
          style={{
            fontWeight: 600,
            fontSize: 16,
            marginBottom: 12,
            color: "#d8b4fe",
          }}
        >
          {title}
        </div>
      )}

      {inputs.map((input, idx) => (
        <Handle
          key={idx}
          type="target"
          position={Position.Left}
          id={input}
          title={`Input: ${input}`}
          style={{
            top: 40 + idx * 24,
            background: "#8b5cf6",
            border: "2px solid white",
            width: 10,
            height: 10,
          }}
        />
      ))}

      <div>{children}</div>

      {outputs.map((output, idx) => (
        <Handle
          key={idx}
          type="source"
          position={Position.Right}
          id={output}
          title={`Output: ${output}`}
          style={{
            top: 40 + idx * 24,
            background: "#10b981",
            border: "2px solid white",
            width: 10,
            height: 10,
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
