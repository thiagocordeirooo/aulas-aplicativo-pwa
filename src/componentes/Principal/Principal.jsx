import "./Principal.css";

function Principal(props) {
  return (
    <main className="Principal_root">
      <h2>{props.titulo}</h2>

      {props.children}
    </main>
  );
}

export default Principal;
