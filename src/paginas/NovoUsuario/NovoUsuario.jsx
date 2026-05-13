import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";

function NovoUsuario() {
  const navigate = useNavigate();

  const [usuarioForm, setUsuarioForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmacaoSenha: "",
  });

  const salvar = () => {
    if (!usuarioForm.nome.trim() || !usuarioForm.email.trim() || !usuarioForm.senha.trim()) {
      toast.error("Todos os campos são obrigatórios.");
      return;
    }

    if (usuarioForm.senha !== usuarioForm.confirmacaoSenha) {
      toast.error("As senhas não coincidem.");
      return;
    }

    const usuariosDoLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    const usuarioJaCadastrado = usuariosDoLocalStorage.find((u) => u.email === usuarioForm.email);
    if (usuarioJaCadastrado) {
      // if(usuarioJaCadastrado !== undefined && usuarioJaCadastrado !== null)
      toast.error("Este email já está cadastrado.");
      return;
    }

    usuariosDoLocalStorage.push({ id: crypto.randomUUID(), ...usuarioForm });

    localStorage.setItem("usuarios", JSON.stringify(usuariosDoLocalStorage));

    toast.success("Usuário cadastrado com sucesso!");
    navigate("/login");
  };

  return (
    <Principal titulo="Novo Usuário">
      <CampoCustomizado
        label="Nome"
        id="nome"
        value={usuarioForm.nome}
        onChange={(e) => setUsuarioForm({ ...usuarioForm, nome: e.target.value })}
        obrigatorio
      />
      <CampoCustomizado
        label="Email"
        type="email"
        value={usuarioForm.email}
        onChange={(e) => setUsuarioForm({ ...usuarioForm, email: e.target.value })}
        obrigatorio
      />
      <CampoCustomizado
        label="Senha"
        type="password"
        value={usuarioForm.senha}
        onChange={(e) => setUsuarioForm({ ...usuarioForm, senha: e.target.value })}
        obrigatorio
      />
      <CampoCustomizado
        label="Confirmação da Senha"
        type="password"
        value={usuarioForm.confirmacaoSenha}
        onChange={(e) => setUsuarioForm({ ...usuarioForm, confirmacaoSenha: e.target.value })}
        obrigatorio
      />

      <BotaoCustomizado tipo="secundario" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default NovoUsuario;
