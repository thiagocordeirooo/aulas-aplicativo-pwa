import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";

import { useNavigate } from "react-router-dom";

function PaginaInicial() {
  const navigate = useNavigate();

  return (
    <Principal titulo="Página Inicial">
      <BotaoCustomizado
        tipo="primario"
        aoClicar={() => navigate("/lista-produtos")}
      >
        Lista de Produtos
      </BotaoCustomizado>

      <BotaoCustomizado
        tipo="secundario"
        aoClicar={() => navigate("/fuscao-preto")}
      >
        Lista de Tarefas
      </BotaoCustomizado>
    </Principal>
  );
}
export default PaginaInicial;
