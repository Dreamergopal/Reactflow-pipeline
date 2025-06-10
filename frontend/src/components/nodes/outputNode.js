import { useState } from "react";
import { Handle, Position } from "reactflow";
import "./nodeCss/oldNode.css"


export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  return (
    <div
      className="node-box"
    >
      
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        title="Input"
        className="handle-input"
      />

      
      <div style={{ fontWeight: 600, fontSize: 16, color: "#d8b4fe" }}>
        Output Node
      </div>

      
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label className="node-label">Name</label>
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          placeholder="Output name"
          className="node-input"
        />
      </div>

     
      <div className="node-section">
        <label className="node-label">Type</label>
        <select
          value={outputType}
          onChange={handleTypeChange}
         className="node-select"
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </div>
    </div>
  );
};
