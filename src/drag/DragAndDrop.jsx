import React from "react";
import Draggable from "react-draggable";

const DraggableCard = ({ bounds, zIndex, onStart, onClick }) => {
  return (
    <Draggable bounds={bounds} onStart={onStart}>
      <div
        onClick={onClick}
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "#4fc3f7",
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
        <h3>Drag Me!</h3>
        <p>This is a draggable card.</p>
      </div>
    </Draggable>
  );
};

export default DraggableCard;
