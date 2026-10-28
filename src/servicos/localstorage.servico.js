// localstorage.servico.js

function buscarNoLocalStorage(chave) {
    const valor = localStorage.getItem(chave);
    if (valor) {
        return JSON.parse(valor);
    }
    return null;
}

function salvarNoLocalStorage(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

export { buscarNoLocalStorage, salvarNoLocalStorage };