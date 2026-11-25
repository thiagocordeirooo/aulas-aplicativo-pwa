import {
  buscarNoLocalStorage,
  salvarNoLocalStorage,
} from "./localstorage.servico";

export const novoUsuario = (usuario) => {
  const usuarios = buscarNoLocalStorage("usuarios") || [];

  const usuarioJaCadastrado = usuarios.some((u) => u.email === usuario.email);

  if (usuarioJaCadastrado) {
    throw new Error("Usuário já cadastrado.");
  }

  usuario.id = Date.now();
  usuarios.push(usuario);
  salvarNoLocalStorage("usuarios", usuarios);
};
