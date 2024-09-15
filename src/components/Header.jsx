import React from "react";
import FileExplorer from "./FileExplorer";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Hi there, </h1>
        <p>
          I'm El Maghraoui Soufiane, Full Stack web Developer. Welcome to my
          portfolio.
        </p>
      </div>
      <FileExplorer fileName={"home"} />
    </div>
  );
};

export default Header;
