import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaListaProdutos from "./paginas/PaginaListaProdutos/PaginaListaProdutos";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-produtos",
    element: <PaginaListaProdutos />,
  },
]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;
