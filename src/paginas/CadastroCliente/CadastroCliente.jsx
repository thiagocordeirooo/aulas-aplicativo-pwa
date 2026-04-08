import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";

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
  }

  return (
    <Principal titulo="Novo Cliente">
      <CampoCustomizado
        label="Nome"
        value={cliente.nome}
        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
      />
      <CampoCustomizado label="CPF" />
      <CampoCustomizado type="date" label="Data Nascimento" />
      <CampoCustomizado type="tel" label="Celular" />
      <CampoCustomizado type="email" label="Email" />

      <BotaoCustomizado tipo="primario" aoClicar={salvar} >Salvar</BotaoCustomizado>
    </Principal>
  );
}

export default CadastroCliente;
