// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "./components/nodes/inputNode";
import { LLMNode } from "./components/nodes/llmNode";
import { OutputNode } from "./components/nodes/outputNode";
import { TextNode } from "./components/nodes/textNode";

import "reactflow/dist/style.css";
import { MathNode } from "./components/customNode/mathNode";
import { LogicNode } from "./components/customNode/logicNode";
import { JoinNode } from "./components/customNode/mergeNode";
import { VectorDBnode } from "./components/customNode/vectorDBnode";
import { ServerNode } from "./components/customNode/serverNode";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  math: MathNode,
  logic: LogicNode,
  merge: JoinNode,
  queary: VectorDBnode,
  server: ServerNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;

        // check if the dropped element is valid
        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <>
      <div
        ref={reactFlowWrapper}
        style={{
          width: "100vw",
          height: "78vh",
          backgroundColor: "#0f0c29", // deep space purple
          backgroundImage:
            "radial-gradient(circle, #1b1b2f 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          fontFamily: "Inter, sans-serif",
          padding: 16,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
          fitView
          style={{
            backgroundColor: "transparent",
            width: "100%",
            height: "100%",
          }}
        >
          <Background color="#d1d5db" gap={gridSize} />

          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </>
  );
};
