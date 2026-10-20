import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaListaProdutos from "./paginas/PaginaListaProdutos/PaginaListaProdutos";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaListaTarefas from "./paginas/PaginaListaTarefas/PaginaListaTarefas";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-produtos",
    element: <PaginaListaProdutos />,
  },
  {
    path: "fuscao-preto",
    element: <PaginaListaTarefas />,
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;
