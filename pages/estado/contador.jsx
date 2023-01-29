import ContadorDisplay from "@/components/ContadorDisplay";
import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const Incrementa = () => setContador(contador + 1);
  const Decrementa = () => setContador(contador - 1);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Contador</h1>
      <ContadorDisplay numero={contador} />
      <div>
        <button onClick={Decrementa}> - </button>
        <button onClick={Incrementa}>+</button>
      </div>
    </div>
  );
}
