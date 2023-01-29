import If from "@/components/If";

export default function condicional2() {
  const numero = 5;
  return (
    <div>
      <If teste={numero % 2 === 0}>O numero é par</If>
      <If teste={numero % 2 === 1}>O numero é Impar</If>
    </div>
  );
}
