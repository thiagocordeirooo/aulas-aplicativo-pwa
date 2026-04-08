import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { formatarComMascara, MASCARA_CPF } from "../../utils/formatarComMascara";
import validarCPF from "../../utils/validarCPF";

function CadastroCliente() {
  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    celular: "",
    email: "",
  });

  const salvar = () => {
    console.log("Cliente salvo:", cliente);
  };

  return (
    <Principal titulo="Novo Cliente">
      <CampoCustomizado
        label="Nome"
        value={cliente.nome}
        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
      />
      <CampoCustomizado
        label="CPF"
        value={cliente.cpf}
        onChange={(e) =>
          setCliente({ ...cliente, cpf: formatarComMascara(e.target.value, MASCARA_CPF) })
        }
        onBlur={(e) => {
          if (e.target.value.trim() && !validarCPF(e.target.value)) {
            alert("CPF inválido!");
          }
        }}
      />
      <CampoCustomizado type="date" label="Data Nascimento" />
      <CampoCustomizado type="tel" label="Celular" />
      <CampoCustomizado type="email" label="Email" />

      <BotaoCustomizado tipo="primario" aoClicar={salvar}>
        Salvar
      </BotaoCustomizado>
    </Principal>
  );
}

export default CadastroCliente;
