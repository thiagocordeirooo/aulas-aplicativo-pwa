import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";

function ListaTarefas({}) {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") {
      alert("Digite uma tarefa para adicionar!");
      return;
    }

    console.log(novaTarefa);

    setTarefas([novaTarefa, ...tarefas]);
  };

  return (
    <Principal>
      <h2>Lista de Tarefas</h2>

      <CampoCustomizado
        label="Nova Tarefa"
        // proprieade não mapeadas...
        id="nova-tarefa"
        type="text"
        placeholder="Precione Enter para adicionar"
        value={novaTarefa}
        onChange={(event) => setNovaTarefa(event.target.value)}
      />

      <BotaoCustomizado tipo="secundario" aoClicar={adicionarTarefa}>
        +
      </BotaoCustomizado>

      {JSON.stringify(tarefas, null, 2)}
    </Principal>
  );
}

export default ListaTarefas;
