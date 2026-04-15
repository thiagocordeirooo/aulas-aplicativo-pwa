import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css";

import { useNavigate } from "react-router-dom";

function PaginaInicial() {
  const navigate = useNavigate();

  return (
    <Principal>
      <BotaoCustomizado tipo="primario" aoClicar={() => navigate("/lista-produtos")}>
        Lista de Produtos
      </BotaoCustomizado>

      <BotaoCustomizado tipo="secundario" aoClicar={() => navigate("/lista-tarefas")}>
        Lista de Tarefas
      </BotaoCustomizado>

      <BotaoCustomizado tipo="primario" aoClicar={() => navigate("/lista-clientes")}>
        Lista de Clientes
      </BotaoCustomizado>

      <BotaoCustomizado tipo="secundario" aoClicar={() => navigate("/cadastro-cliente")}>
        Cadastro de Clientes
      </BotaoCustomizado>

      <BotaoCustomizado aoClicar={() => navigate("/blablabla")}>Rota Inválida</BotaoCustomizado>
    </Principal>
  );
}

export default PaginaInicial;
