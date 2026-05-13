function validarSenha(senha) {
  // A senha deve conter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais
  //   const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  //   return regex.test(senha);
  return senha.trim().length >= 4;
}

export default validarSenha;
