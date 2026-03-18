import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";
import "./Principal.css";

function Principal() {
  return (
    <main className="principal__root">
      <BotaoCustomizado tipo="primario">Salvar</BotaoCustomizado>

      <BotaoCustomizado tipo="secundario">Cancelar</BotaoCustomizado>
    </main>
  );
}

export default Principal;
