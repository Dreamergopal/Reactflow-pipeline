import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(39,0,80,1) 0%, rgba(64,0,128,1) 50%, rgba(30,27,75,1) 100%)",
        padding: "16px 32px",
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        borderBottom: "1px solid #4c1d95",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="math" label="Math" />
      <DraggableNode type="logic" label="Logic" />
      <DraggableNode type="merge" label="Merge" />
      <DraggableNode type="queary" label="Vector-DB" />
      <DraggableNode type="server" label="Server" />
    </div>
  );
};
