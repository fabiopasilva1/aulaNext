import Head from "next/head";

export default function jsx4() {
  const subtitle = "Estou no JavaScript";
  const trechoH3 = <h3>{3 * 3}</h3>;
  return (
    <>
      <Head>
        <title>Aula 4</title>
      </Head>
      <div>
        <h1>Integração JS e JSX</h1>
        <h2>{subtitle}</h2>
        {trechoH3}
        <h4>{Math.max(13, 39)}</h4>
        <h5>{entre(15, 10, 15)}</h5>
      </div>
    </>
  );
}

function entre(valor, min, max) {
  if (valor >= min && valor <= max) {
    return "sim";
  } else {
    return "não";
  }
}
