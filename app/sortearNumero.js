const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();
const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");

elementoMenorValor.textContent = menorValor;
elementoMaiorValor.textContent = maiorValor;

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSecreto);
