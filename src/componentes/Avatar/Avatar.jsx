import "./Avatar.css";

function Avatar(props) {
  const nomes = props.nome.split(" ");

  const primeiroNome = nomes[0];
  const primeiraLetraPrimeiroNome = primeiroNome[0];

  let primeiraLetraUltimoNome = "";
  if (nomes.length > 1) {
    const ultimoNome = nomes.at(-1);
    primeiraLetraUltimoNome = ultimoNome[0];
  }

  return (
    <div className="Avatar_root">
      {primeiraLetraPrimeiroNome + primeiraLetraUltimoNome}
    </div>
  );
}

export default Avatar;
