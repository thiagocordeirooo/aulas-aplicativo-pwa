// imports de bibliotecas externas, instaladas via npm
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// imports de arquivos de estilos (CSS)
import "./App.css";
// imports de componentes/paginas internas do projeto React (arquivos .jsx)
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import CadastroCliente from "./paginas/CadastroCliente/CadastroCliente";
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
    </>
  );
}

export default App;
