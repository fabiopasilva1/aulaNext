import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho nome="Michele" familia={props.familia} />
      <Filho nome="Laura" familia={props.familia} />
      <Filho {...props} nome="Fabio" />
    </div>
  );
}
