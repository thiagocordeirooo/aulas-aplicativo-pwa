import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./ListaTarefas.css";

function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") {
      alert("Digite uma tarefa para adicionar!");
      return;
    }

    setTarefas([{ id: Date.now(), concluida: false, descricao: novaTarefa }, ...tarefas]);
    setNovaTarefa("");
  };

  const removerTarefa = (indice) => {
    if (confirm("Tem certeza que deseja remover esta tarefa?")) {
      tarefas.splice(indice, 1);
      setTarefas([...tarefas]);
    }
  };

  const marcarComoConcluida = (indice) => {
    tarefas[indice].concluida = !tarefas[indice].concluida;
    setTarefas([...tarefas]);
  };

  return (
    <Principal voltarPara="/" titulo={`Lista de Tarefas (${tarefas.length})`}>
        <CampoCustomizado
          label="Nova Tarefa"
          // proprieade não mapeadas...
          id="nova-tarefa"
          type="text"
          placeholder="Precione Enter para adicionar"
          value={novaTarefa}
          onChange={(event) => setNovaTarefa(event.target.value)}
          onKeyPress={(event) => {
            if (event.code === "Enter") {
              adicionarTarefa();
            }
          }}
        />
        {/* 
        <BotaoCustomizado tipo="secundario" aoClicar={adicionarTarefa}>
          +
        </BotaoCustomizado> */}
      {!tarefas.length && (
        <span className="lista-tarefas__mensagem-sem-tarefas">Não há tarefas para mostrar.</span>
      )}

      {tarefas.map((item, indice) => {
        return (
          <div key={indice} className="lista-tarefas__tarefa">
            <input
              type="checkbox"
              checked={item.concluida}
              onChange={() => marcarComoConcluida(indice)}
            />
            <span style={{ textDecoration: item.concluida ? "line-through" : "none" }}>
              {item.descricao}
            </span>
            <FaTrashAlt onClick={() => removerTarefa(indice)} />
          </div>
        );
      })}
      {/* <pre>{JSON.stringify(tarefas, null, 2)}</pre> */}
    </Principal>
  );
}

export default ListaTarefas;
