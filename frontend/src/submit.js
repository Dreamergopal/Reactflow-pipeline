import axios from "axios";
import { useStore } from "./store"; 
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/pipelines/parse",
        {
          nodes: nodes.map((node) => ({ id: node.id })),
          edges: edges.map((edge) => ({
            source: edge.source,
            target: edge.target,
          })),
        }
      );

      const { num_nodes, num_edges, is_dag } = response.data;
      alert(
        `Nodes: ${num_nodes}\nEdges: ${num_edges}\nIs DAG: ${
          is_dag ? "Yes" : "No"
        }`
      );
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert("Failed to submit pipeline.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "17px 0",
        backgroundColor: "#0f0c29",
      }}
    >
      <button
        type="submit"
        onClick={handleClick}
        style={{
          background: "linear-gradient(90deg, #7c3aed, #8b5cf6)",
          border: "none",
          color: "#fff",
          padding: "7px 12px",
          fontSize: "16px",
          fontWeight: 600,
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 0 12px rgba(139, 92, 246, 0.6)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.boxShadow = "0 0 20px rgba(139, 92, 246, 0.9)";
          e.target.style.transform = "scale(1.03)";
        }}
        onMouseOut={(e) => {
          e.target.style.boxShadow = "0 0 12px rgba(139, 92, 246, 0.6)";
          e.target.style.transform = "scale(1)";
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};
