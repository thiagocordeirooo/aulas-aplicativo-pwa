import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import { toast } from "react-toastify";
import { novoUsuario } from "../../servicos/usuarios.servico";

function PaginaCadastroUsuario() {
  const [formUsuario, setFormUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const salvar = () => {
    try {
      if (
        !formUsuario.nome.trim() ||
        !formUsuario.email.trim() ||
        !formUsuario.senha.trim()
      ) {
        toast.error("Preencha todos os campos.");
        return;
      }

      if (formUsuario.senha !== formUsuario.confirmarSenha) {
        toast.error("As senhas não coincidem.");
        return;
      }

      novoUsuario(formUsuario);
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Principal titulo="Novo Usuário" voltarPara="/login">
      <CampoCustomizado
        label="Nome"
        type="text"
        value={formUsuario.nome}
        onChange={(e) =>
          setFormUsuario({ ...formUsuario, nome: e.target.value })
        }
      />
      <CampoCustomizado
        label="Email"
        type="email"
        value={formUsuario.email}
        onChange={(e) =>
          setFormUsuario({ ...formUsuario, email: e.target.value })
        }
      />
      <CampoCustomizado
        label="Senha"
        type="password"
        value={formUsuario.senha}
        onChange={(e) =>
          setFormUsuario({ ...formUsuario, senha: e.target.value })
        }
      />
      <CampoCustomizado
        label="Confirmar Senha"
        type="password"
        value={formUsuario.confirmarSenha}
        onChange={(e) =>
          setFormUsuario({ ...formUsuario, confirmarSenha: e.target.value })
        }
      />
      <BotaoCustomizado tipo="secundario" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaCadastroUsuario;
