import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import { buscarClientes } from "../../servicos/clientes.servico";
import "./PaginaListaClientes.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdAdd } from "react-icons/md";

import { salvarNoLocalStorage } from "../../servicos/localstorage.servico";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function PaginaListaClientes() {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState(buscarClientes());

  const excluirCliente = (clienteParaExcluir) => {
    if (confirm(`Deseja  excluir o cliente: ${clienteParaExcluir.nome}?`)) {
      const clientesAtualizados = clientes.filter(
        (item) => item.id !== clienteParaExcluir.id,
      );
      setClientes(clientesAtualizados);
      salvarNoLocalStorage("clientes", clientesAtualizados);
      toast.success("Cliente excluído com sucesso!");
    }
  };

  const editarCliente = (clienteParaEditar) => {
    navigate("/cadastro-cliente/" + clienteParaEditar.id);
  };

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      {clientes.map((item, index) => {
        return (
          <div key={index} className="PaginaListaClientes_item">
            <div>
              <h3>{item.nome}</h3>
              <span className="PaginaListaClientes_item_email">
                <MdOutlineEmail />
                {item.email}
              </span>
            </div>

            <div className="PaginaListaClientes_item_acoes">
              <MdEdit size={24} onClick={() => editarCliente(item)} />
              <MdDelete
                size={24}
                color="red"
                onClick={() => excluirCliente(item)}
              />
            </div>
          </div>
        );
      })}

      <div className="PaginaListaClientes_botaoAdicionar">
        <MdAdd onClick={() => navigate("/cadastro-cliente")} />
      </div>
    </Principal>
  );
}

export default PaginaListaClientes;
