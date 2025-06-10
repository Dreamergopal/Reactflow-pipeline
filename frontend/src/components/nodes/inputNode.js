import { useState } from "react";
import { Handle, Position } from "reactflow";
import "./nodeCss/oldNode.css"

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  return (
    <div className="node-box">
      <div className="v">Input Node</div>

      <div className="node-section">
        <label className="node-label">Name</label>
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="node-input"
        />
      </div>

      <div className="node-section">
        <label className="node-label">Type</label>
        <select
          value={inputType}
          onChange={handleTypeChange}
          className="node-select"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        title="Output"
        className="handle-output"
      />
    </div>
  );
};
