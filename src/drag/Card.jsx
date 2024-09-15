import React, { useState, useRef, useEffect } from "react";
import "./Card.css";

const Card = () => {
  const [size, setSize] = useState({ w: 200, h: 200, l: 100, t: 100 });
  const ref = useRef({ x: 0, y: 0, s: size });

  useEffect(() => {
    const move = (e) =>
      ref.current.dir &&
      setSize((s) => ({
        w: Math.min(
          window.innerWidth - s.l,
          Math.max(
            100,
            ref.current.dir.includes("right")
              ? ref.current.s.w + (e.clientX - ref.current.x)
              : s.w
          )
        ),
        h: Math.min(
          window.innerHeight - s.t,
          Math.max(
            100,
            ref.current.dir.includes("bottom")
              ? ref.current.s.h + (e.clientY - ref.current.y)
              : s.h
          )
        ),
        l: ref.current.dir.includes("left")
          ? Math.max(0, ref.current.s.l + (e.clientX - ref.current.x))
          : s.l,
        t: ref.current.dir.includes("top")
          ? Math.max(0, ref.current.s.t + (e.clientY - ref.current.y))
          : s.t,
      }));
    const stop = () => (ref.current.dir = null);
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", stop);
    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);
    };
  }, []);

  const start = (e, dir) =>
    (ref.current = { x: e.clientX, y: e.clientY, s: size, dir });

  return (
    <div
      // className="card"
      style={{ width: size.w, height: size.h, left: size.l, top: size.t }}
    >
      <h3>Drag to Resize</h3>
      {/* {[
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
        "top",
        "right",
        "bottom",
        "left",
      ].map((dir) => (
        <div
          key={dir}
          className={`resize-handle ${dir}`}
          onMouseDown={(e) => start(e, dir)}
        />
      ))} */}
    </div>
  );
};

export default Card;
