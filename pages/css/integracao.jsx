import styles from "./integracao.module.css";
export default function integracao() {
  console.log(styles);
  return (
    <div id={styles.integracao1}>
      <div className={styles.vermelha}>Texto #01</div>
      <div className={styles.azul}>Texto #02</div>
    </div>
  );
}
