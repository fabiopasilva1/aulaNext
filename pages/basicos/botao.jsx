function acao1() {
  console.log("acao1");
}
function acao5(e) {
  console.log(e);
}
export default function botao() {
  return (
    <div>
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      <button onClick={(e) => acao5(e.ctrlKey)}>Click #01</button>
    </div>
  );
}
