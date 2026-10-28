import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import { FaTrash } from "react-icons/fa6";
import "./PaginaListaTarefas.css";
import {
  buscarNoLocalStorage,
  salvarNoLocalStorage,
} from "../../servicos/localstorage.servico";
import { toast } from "react-toastify";

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState(buscarNoLocalStorage("tarefas") || []);

  const adicionarTarefa = () => {
    if (descricaoTarefa.trim()) {
      const novaTarefa = { id: Date.now(), descricao: descricaoTarefa };
      const tarefasAtualizadas = [...tarefas, novaTarefa];
      setTarefas(tarefasAtualizadas);
      setDescricaoTarefa("");
      salvarNoLocalStorage("tarefas", tarefasAtualizadas);
      toast.success("Tarefa adicionada com sucesso!");
    } else {
      toast.error("Preencha o campo Tarefa!");
    }
  };

  const removerTarefa = (id) => {
    if (confirm("Deseja realmente remover a tarefa?")) {
      const tarefasAtualizadas = tarefas.filter((item) => item.id !== id);
      setTarefas(tarefasAtualizadas);
      salvarNoLocalStorage("tarefas", tarefasAtualizadas);
      toast.success("Tarefa removida com sucesso!");
    }
  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <CampoCustomizado
        label="Tarefa"
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={descricaoTarefa}
        onChange={(e) => setDescricaoTarefa(e.target.value)}
      />

      <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
        Adicionar Tarefa
      </BotaoCustomizado>

      {tarefas.map((item) => {
        return (
          <div key={item.id} className="PaginaListaTarefas_item">
            <span>
              <input type="checkbox" />
              {item.descricao}
            </span>
            <FaTrash
              color="red"
              cursor="pointer"
              onClick={() => removerTarefa(item.id)}
            />
          </div>
        );
      })}

      {!tarefas.length && (
        <span className="PaginaListaTarefas_vazia">
          Nenhuma tarefa cadastrada.
        </span>
      )}
    </Principal>
  );
}

export default PaginaListaTarefas;
