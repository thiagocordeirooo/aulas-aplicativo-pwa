import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ValidarAutenticacao() {
  const navigate = useNavigate();
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  useEffect(() => {
    if (!usuarioLogado) {
      navigate("/login");
    }
  }, [navigate, usuarioLogado]);

  return usuarioLogado ? <Outlet /> : null;
}

export default ValidarAutenticacao;
