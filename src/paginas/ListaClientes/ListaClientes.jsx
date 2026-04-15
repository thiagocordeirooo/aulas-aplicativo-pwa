import Principal from "../../componentes/Principal/Principal";
import { MdAddCircle } from "react-icons/md";

function ListaClientes() {
  const clientesDoLocalStorage = JSON.parse(localStorage.getItem("clientes")) || [];

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      {clientesDoLocalStorage.map((cliente) => {
        return <div key={cliente.id}>{cliente.nome}</div>;
      })}

      <MdAddCircle size={56} color="#ff9100" />
    </Principal>
  );
}

export default ListaClientes;
