import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import {
  formatarComMascara,
  MASCARA_CPF,
  MASCARA_TELEFONE,
} from "../../utils/formatarComMascara";
import { toast } from "react-toastify";
import validarCPF from "../../utils/validarCPF";
import validarEmail from "../../utils/validarEmail";
import { salvarCliente } from "../../servicos/clientes.servico";

function PaginaCadastroCliente() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");

  const salvar = () => {
    if (!nome.trim() || !email.trim()) {
      toast.error("Os campos nome e email são obrigatórios!");
      return;
    }

    if (!validarEmail(email)) {
      toast.error("Email inválido!");
      return;
    }

    if (cpf.trim() && !validarCPF(cpf)) {
      toast.error("CPF inválido!");
      return;
    }

    const cliente = {
      nome,
      email,
      dataNascimento,
      telefone,
      cpf,
    };
    console.log(cliente);
    salvarCliente(cliente);
    toast.success("Cliente salvo com sucesso!");
  };

  return (
    <Principal titulo="Novo Cliente" voltarPara="/">
      <CampoCustomizado
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        maxLength={50}
      />
      <CampoCustomizado
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CampoCustomizado
        label="Data Nascimento"
        type="date"
        value={dataNascimento}
        onChange={(e) => setDataNascimento(e.target.value)}
      />
      <CampoCustomizado
        label="Telefone"
        type="tel"
        value={telefone}
        onChange={(e) =>
          setTelefone(formatarComMascara(e.target.value, MASCARA_TELEFONE))
        }
      />
      <CampoCustomizado
        label="CPF"
        value={cpf}
        onChange={(e) =>
          setCpf(formatarComMascara(e.target.value, MASCARA_CPF))
        }
      />

      <BotaoCustomizado tipo="primario" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaCadastroCliente;
