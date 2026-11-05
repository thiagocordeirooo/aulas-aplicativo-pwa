import {
  buscarNoLocalStorage,
  salvarNoLocalStorage,
} from "./localstorage.servico";

export const salvarCliente = (cliente) => {
  const clientes = buscarNoLocalStorage("clientes") || [];
  if (!cliente.id) {
    // inclusão de novo cliente
    cliente.id = Date.now();
    clientes.push(cliente);
  } else {
    // edição de cliente existente
    const index = clientes.findIndex((c) => c.id === cliente.id);
    clientes[index] = cliente;
  }
  
  salvarNoLocalStorage("clientes", clientes);
};

export const buscarClientes = () => {
  return buscarNoLocalStorage("clientes") || [];
};
