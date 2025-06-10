import { useEffect, useState } from "react";
import BaseNode from "../shared/baseNode";
import "./customCss/node.css"

export const VectorDBnode = ({ data }) => {
  const [topic, setTopic] = useState(data?.topic ?? "");
  const [query, setQuery] = useState(data?.query ?? "");
  const [click, setClick] = useState(false);
  const [status, setStatus] = useState("");

  function handelSubmit() {
    setClick(true);
    if (status !== `Empty value...`) return;
    setTimeout(() => {
      setStatus("Submitted successfully");
    }, 4000);
    if (status === "Submitted successfully") return;
    setTimeout(() => {
      setStatus("");
    }, 10000);
  }

  useEffect(() => {
    if (!click) return;
    const interval = setTimeout(() => {
      if (topic !== "" && query !== "") {
        setStatus(`submiting...`);
      } else {
        setStatus(`Empty value...`);
      }
      setClick(false);
    }, 1500);

    return () => {
      clearTimeout(interval);
    };
  }, [click, topic, query]);

  return (
    <BaseNode
      title="VectorDB Node"
      inputs={["search", "query"]}
      outputs={["result"]}
    >
      <div className="node-container">
        <div className="node-section">
          <label htmlFor="text" className="node-label">
            Query
          </label>
          <textarea
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your query"
            rows={3}
            className="node-textarea"
          />
        </div>

        <div className="node-section">
          <label htmlFor="topic" className="node-label">
            Topic
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Topic name"
            className="node-input"
          />
        </div>

        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            minHeight: "24px",
            color: status.includes("Empty") ? "#f87171" : "#34d399",
          }}
        >
          {status}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
            Let's Go
          </button>
        </div>
      </div>
    </BaseNode>
  );
};
