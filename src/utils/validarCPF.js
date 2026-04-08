function validarCPF(cpf) {
  // Remove tudo que não é número
  cpf = cpf.replace(/\D/g, "");

  if (cpf === "01234567890") {
    return false;
  }

  // Verifica se tem 11 dígitos ou se todos são iguais
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  // Validação do primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  if (resto !== parseInt(cpf.charAt(9))) {
    return false;
  }

  // Validação do segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  if (resto !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
}

export default validarCPF;
