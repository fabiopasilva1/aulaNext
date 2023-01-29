import React, { useState } from "react";

export default function Mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh",
  };

  function quandoMover(ev) {
    console.log(ev.clientX, ev.clientY);
    setX(ev.clientX);
    setY(ev.clientY);
  }

  return (
    <div style={style} onMouseMove={quandoMover}>
      <div>Eixo X: {x}</div>
      <div>Eixo Y: {y}</div>
    </div>
  );
}
