import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css";
import { FaBox, FaTasks } from "react-icons/fa";
import { IoPeople, IoPersonAdd } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

function PaginaInicial() {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("Cards");

  return (
    <Principal>
      <div className="pagina-inicial__card_row">
        <input
          type="radio"
          id="cards"
          name="fav_language"
          value="Cards"
          checked={selectedOption === "Cards"}
          onChange={() => setSelectedOption("Cards")}
        />
        <label for="cards">Cards</label>
        <input
          type="radio"
          id="botoes"
          name="fav_language"
          value="Botões"
          checked={selectedOption === "Botões"}
          onChange={() => setSelectedOption("Botões")}
        />
        <label for="botoes">Botões</label>
      </div>

      {selectedOption === "Cards" && (
        <>
          <div className="pagina-inicial__card_row">
            <button className="pagina-inicial__card" onClick={() => navigate("/lista-produtos")}>
              <FaBox size={64} color="#7986cb" />
              Produtos
            </button>
            <button className="pagina-inicial__card" onClick={() => navigate("/lista-tarefas")}>
              <FaTasks size={64} color="#ffab40" />
              Tarefas
            </button>
          </div>

          <div className="pagina-inicial__card_row">
            <button className="pagina-inicial__card" onClick={() => navigate("/lista-clientes")}>
              <IoPeople size={64} color="#ffab40" />
              Clientes
            </button>
            <button className="pagina-inicial__card" onClick={() => navigate("/cadastro-cliente")}>
              <IoPersonAdd size={64} color="#7986cb" />
              Cadastro de Clientes
            </button>
          </div>
        </>
      )}

      {selectedOption === "Botões" && (
        <>
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
        </>
      )}
    </Principal>
  );
}

export default PaginaInicial;
