export default function Filho(props) {
  return (
    <div>
      <h3>Filho</h3>
      <button onClick={(e) => props.funcao(1)}>Add 1</button>
      <button onClick={() => props.funcao("Passei no ENEM!")}>
        Falar Com pai
      </button>
    </div>
  );
}
