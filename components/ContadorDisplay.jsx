export default function ContadorDisplay(props) {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "50px",
    borderRadius: "25px",
    backgroundColor: "#222",
    color: "#fff",
    fontSize: "2rem",
    margin: "20px",
  };

  return <div style={style}>{props.numero}</div>;
}
