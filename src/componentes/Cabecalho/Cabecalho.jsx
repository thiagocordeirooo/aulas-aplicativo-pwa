import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";

function Cabecalho() {
  return (
    <header className="Cabecalho_root">
      <img
        src="/favicon.svg"
        style={{
          width: "24px",
          height: 24,
        }}
      />

      <Avatar nome="João" />
    </header>
  );
}

export default Cabecalho;
