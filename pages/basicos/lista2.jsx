import Head from "next/head";
function gerarLista() {
  const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return lista;
}
export default function lista1() {
  const Span = () => {
    return (
      <div>
        {gerarLista().map((vl, index) => {
          return <span key={index}>{vl},</span>;
        })}
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>Desafio lista 1</title>
      </Head>

      <Span />
    </>
  );
}
