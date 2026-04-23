import "./CampoCustomizado.css";

function CampoCustomizado({ label, obrigatorio, opcoes, ...props }) {
  return (
    <div className="campo-customizado__root">
      <span>
        {label} {obrigatorio && <span className="campo-customizado__obrigatorio">*</span>}
      </span>

      {!opcoes && <input className="campo-customizado__input" {...props} />}

      {opcoes && (
        <select className="campo-customizado__input" {...props}>
          <option key="" value="">
            Selecione...
          </option>
          {opcoes.map((opcao) => (
            <option key={opcao.valor} value={opcao.valor}>
              {opcao.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default CampoCustomizado;
