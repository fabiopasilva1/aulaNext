import Titulo from "../../components/Titulo";
import Head from "next/head";

export default function jsx2() {
  const array = [{ nome: "Paulo" }, { nome: "Fabio" }];
  console.log(array);
  const conteudo = (
    <div>
      <h1>Conteudo Alterado</h1>
      <h2 className="subtitle">Subtitle</h2>
    </div>
  );
  return (
    <>
      <Head>
        <title>Titulo da Página</title>
      </Head>

      <Titulo
        principal="Página de Cadastro"
        description="Incluir, alterar e excluir coisas"
      />
      <Titulo
        principal="Página de Login"
        description="Informe seu email e senha"
      />

      <h1>Aula 3 JSX</h1>
      {conteudo}
      <ul>
        {array.map((ls, index) => {
          return (
            <li key={index}>
              Id: {index} Name: {ls.nome}
            </li>
          );
        })}
      </ul>
    </>
  );
}
