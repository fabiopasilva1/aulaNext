import NumeroDisplay from "@/components/numeroDisplay";
import { mega } from "@/functions/mega";
import { useEffect, useState } from "react";

export default function Megasena() {
  const [qtd, setQtd] = useState(6);
  const [numeros, setNumeros] = useState(mega([]));

  function renderNumeros() {
    return numeros.map((numero) => (
      <NumeroDisplay key={numero} numero={numero} />
    ));
  }

  useEffect(() => {
    setNumeros(mega());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h1>Mega Sena</h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {renderNumeros()}
      </div>
      <div>
        <input
          type="number"
          min={6}
          max={20}
          onChange={(e) => setQtd(+e.target.value)}
          value={qtd}
        />
        <button onClick={() => setNumeros(mega(qtd))}>Gerar Aposta</button>
      </div>
    </div>
  );
}
