export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
      style={{
        cursor: "grab",
        minWidth: "60px",
        height: "50px",
        padding: "0 12px",
        backgroundColor: "#4c1d95",
        border: "1px solid #9333ea",
        color: "#fff",
        fontWeight: 500,
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        boxShadow: "0 0 8px rgba(147, 51, 234, 0.4)",
        transition: "all 0.2s ease-in-out",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.boxShadow = "0 0 16px rgba(147, 51, 234, 0.8)";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.boxShadow = "0 0 8px rgba(147, 51, 234, 0.4)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {label}
    </div>
  );
};
