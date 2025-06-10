import { useEffect, useRef, useState } from "react";
import { Handle, Position } from "reactflow";
import "./nodeCss/oldNode.css"


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const [height, setHeight] = useState(80);

  const extractVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)].map((match) => match[1]);
    console.log(matches);
    return [...new Set(matches)];
  };

  const handleTextChange = (e) => {
    const updateText = e.target.value;
    setCurrText(updateText);
    setVariables(extractVariables(updateText));
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setHeight(textareaRef.current.scrollHeight + 60);
    }
  }, [currText]);

  return (
    <div
      className="node-box"
    >
      <div
        className="node-title"
      >
        Text Node
      </div>

      <textarea
        ref={textareaRef}
        value={currText}
        onChange={handleTextChange}
        placeholder="Enter something like {{username}}"
        className="node-textarea"
        rows={1}
      />

      {variables.map((v, idx) => (
        <Handle
          key={v}
          type="target"
          position={Position.Left}
          id={`${id}-${v}`}
          title={`Input: ${v}`}
          style={{
            top: 50 + idx * 24,
            background: "#8b5cf6",
            border: "2px solid white",
            width: 10,
            height: 10,
          }}
        />
      ))}

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        title="Output"
        style={{
          top: height / 2,
          background: "#10b981",
          border: "2px solid white",
          width: 10,
          height: 10,
        }}
      />
    </div>
  );
};
