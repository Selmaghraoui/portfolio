import React from "react";
import Draggable from "react-draggable";

const SecondDraggableCard = ({ bounds, zIndex, onStart, onClick }) => {
  return (
    <Draggable bounds={bounds} onStart={onStart}>
      <div
        onClick={onClick}
        style={{
          width: "250px",
          height: "150px",
          backgroundColor: "#ff5722",
          padding: "16px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          color: "#fff",
          cursor: "move",
          position: "absolute",
          zIndex: zIndex,
        }}
      >
        <h3>Drag Me Too!</h3>
        <p>This is another draggable card.</p>
      </div>
    </Draggable>
  );
};

export default SecondDraggableCard;
