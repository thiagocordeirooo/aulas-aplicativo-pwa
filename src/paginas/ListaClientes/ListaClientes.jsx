import { useState } from "react";
import { MdAddCircle, MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Avatar from "../../componentes/Avatar/Avatar";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import normalizarString from "../../utils/normalizarString";
import "./ListaClientes.css";

function ListaClientes() {
  const navigate = useNavigate();

  const [termoBusca, setTermoBusca] = useState("");

  const clientesDoLocalStorage = JSON.parse(localStorage.getItem("clientes")) || [];

  const removerCliente = (clienteParaRemover) => {
    if (confirm(`Tem certeza que deseja remover o cliente ${clienteParaRemover.nome} ?`)) {
      const clientesAtualizados = clientesDoLocalStorage.filter(
        (cliente) => cliente.id !== clienteParaRemover.id
      );
      localStorage.setItem("clientes", JSON.stringify(clientesAtualizados));
      navigate("/lista-clientes");
    }
  };

  const clientesFiltrados = clientesDoLocalStorage.filter((cliente) =>
    normalizarString(cliente.nome).includes(normalizarString(termoBusca)) ||
    normalizarString(cliente.cpf).includes(normalizarString(termoBusca)) ||
    normalizarString(cliente.cidade).includes(normalizarString(termoBusca))

  );

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      <CampoCustomizado
        type="search"
        placeholder="Buscar Cliente pelo nome, CPF ou cidade."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />

      {clientesFiltrados.map((cliente) => {
        return (
          <div key={cliente.id} className="lista-clientes__item">
            <div className="lista-clientes__item-informacoes">
              <Avatar nome={cliente.nome} imagem={cliente.foto} />

              {cliente.nome}
            </div>
            <div>
              <MdEdit size={24} onClick={() => navigate(`/cadastro-cliente/${cliente.id}`)} />
              <MdDelete size={24} color="red" onClick={() => removerCliente(cliente)} />
            </div>
          </div>
        );
      })}

      {clientesFiltrados.length === 0 && (
        <p className="lista-clientes__mensagem-vazia">Nenhum cliente encontrado.</p>
      )}

      <MdAddCircle
        className="lista-clientes__botao-adcionar"
        size={64}
        color="#ff9100"
        onClick={() => navigate("/cadastro-cliente")}
      />
    </Principal>
  );
}

export default ListaClientes;
