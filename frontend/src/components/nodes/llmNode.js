import { Handle, Position } from "reactflow";
import "./nodeCss/oldNode.css"


export const LLMNode = ({ id, data }) => {
  return (
    <div className="node-box">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        title="System Prompt"
        className="handle-input"
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        title="User Prompt"
        className="handle-input"
      />

      <div style={{ fontWeight: 600, fontSize: 16, color: "#d8b4fe" }}>
        LLM Node
      </div>
      <div style={{ fontSize: 14, color: "#cbd5e1" }}>This is LLM</div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        title="LLM Response"
        className="handle-output"
      />
    </div>
  );
};
