import listaProdutos from "../../data/listaProdutos";
export default function repeticao2() {
  function renderizarLinhas() {
    return listaProdutos.map((produto) => {
      return (
        <tr key={produto.id}>
          <td style={comBorda}>{produto.id}</td>
          <td style={comBorda}>{produto.nome}</td>
          <td style={comBorda}> {produto.preco}</td>
        </tr>
      );
    });
  }

  const comBorda = {
    border: "1px solid #000",
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> Códio</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
          {renderizarLinhas()}
        </thead>
      </table>
    </div>
  );
}
