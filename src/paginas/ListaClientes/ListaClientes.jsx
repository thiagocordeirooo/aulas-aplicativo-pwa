import { MdAddCircle, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Principal from "../../componentes/Principal/Principal";
import "./ListaClientes.css";

function ListaClientes() {
  const navigate = useNavigate();

  const clientesDoLocalStorage = JSON.parse(localStorage.getItem("clientes")) || [];

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      {clientesDoLocalStorage.map((cliente) => {
        return (
          <div key={cliente.id}>
            {cliente.nome}
            <MdEdit onClick={() => navigate(`/cadastro-cliente/${cliente.id}`)} />
          </div>
        );
      })}

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
