import "./App.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
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
