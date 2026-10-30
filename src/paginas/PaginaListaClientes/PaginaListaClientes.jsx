import Principal from "../../componentes/Principal/Principal";
import { buscarClientes } from "../../servicos/clientes.servico";
import "./PaginaListaClientes.css";
import { MdOutlineEmail } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function PaginaListaClientes() {
  const clientes = buscarClientes();

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      {clientes.map((item, index) => {
        return (
          <div key={index} className="PaginaListaClientes_item">
            <h3>{item.nome}</h3>
            <span className="PaginaListaClientes_item_email">
              <MdOutlineEmail />
              {item.email}
            </span>

            <MdEdit size={24} />
            <MdDelete size={24} />
          </div>
        );
      })}
    </Principal>
  );
}

export default PaginaListaClientes;
