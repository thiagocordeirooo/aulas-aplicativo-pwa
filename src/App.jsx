// imports de bibliotecas externas, instaladas via npm
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// imports de arquivos de estilos (CSS)
import "./App.css";
// imports de componentes/paginas internas do projeto React (arquivos .jsx)
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
// imports de páginas
import CadastroCliente from "./paginas/CadastroCliente/CadastroCliente";
import ListaClientes from "./paginas/ListaClientes/ListaClientes";
import ListaProdutos from "./paginas/ListaProdutos/ListaProdutos";
import ListaTarefas from "./paginas/ListaTarefas/ListaTarefas";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-produtos",
    element: <ListaProdutos />,
  },
  {
    path: "lista-tarefas",
    element: <ListaTarefas />,
  },
  {
    path: "lista-clientes",
    element: <ListaClientes />,
  },
  {
    path: "cadastro-cliente",
    element: <CadastroCliente />,
  },
  {
    path: "*",
    element: <h3>Página não encontrada!!</h3>,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={roteador} />
      <Rodape />
      <ToastContainer />
    </>
  );
}

export default App;
