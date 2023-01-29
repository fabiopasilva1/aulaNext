import Contador from "../../components/Contador";
import { Component } from "react";

export default class ContadorPage extends Component {
  render() {
    return (
      <>
        <Contador valorInicial={10} passo={37} />
      </>
    );
  }
}
