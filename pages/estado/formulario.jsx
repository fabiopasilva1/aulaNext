import { useState } from "react";

export default function Formulario() {
  const [valor, setValor] = useState("");
  const handleChange = (e) => {
    setValor(e.target.value);
    console.log(valor);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {valor}
      <input type="text" onChange={handleChange} value={valor} />
    </div>
  );
}
