import { useState } from "react";
import Filho from "./Filho";

export default function Pai() {
  function falarComigo(param) {
    console.log(param);
  }

  return (
    <div>
      <h2>Pai</h2>
      <Filho funcao={falarComigo} />
    </div>
  );
}
