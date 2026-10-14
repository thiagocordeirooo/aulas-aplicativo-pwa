import { Link } from "react-router-dom";
import "./Principal.css";

function Principal(props) {
  return (
    <main className="Principal_root">
      {props.voltarPara && <Link to={props.voltarPara}>{"<"}</Link>}

      <h2>{props.titulo}</h2>

      {props.children}
    </main>
  );
}

export default Principal;
