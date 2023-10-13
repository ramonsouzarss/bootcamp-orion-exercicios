"use strict";
function contarVogais(palavra) {
    const vogaisRegex = /[aeiouáàâãåéêíóôõúü]/i;
    let quantidade = 0;
    const palavraMinuscula = palavra.toLowerCase();
    for (let i = 0; i < palavraMinuscula.length; i++) {
        if (vogaisRegex.test(palavraMinuscula[i])) {
            quantidade++;
        }
    }
    return quantidade;
}
const palavraExemplo = "Chihuahua";
const quantidadeVogaisExemplo = contarVogais(palavraExemplo);
console.log(`A palavra "${palavraExemplo}" contém ${quantidadeVogaisExemplo} vogais.`);
function processarFormulario(event) {
    event.preventDefault();
    const palavraInput = document.getElementById("palavraInput");
    const resultado = document.getElementById("resultado");
    const palavra = palavraInput.value;
    const quantidadeVogais = contarVogais(palavra);
    resultado.innerHTML = `Palavra: "${palavra}"<br>Quantidade de vogais: ${quantidadeVogais}`;
}
document.addEventListener("DOMContentLoaded", function () {
    const vowelCounterForm = document.getElementById("vowelCounterForm");
    vowelCounterForm.addEventListener("submit", processarFormulario);
});
//# sourceMappingURL=exercicio3.js.map