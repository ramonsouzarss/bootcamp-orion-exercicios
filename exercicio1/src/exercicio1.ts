function contarVogais(palavra: string): number {

  // Declaração do array
  const vogaisRegex: RegExp = /[aeiouáàâãåéêíóôõúü]/i;

  // Declaração de uma variável para contar a quantidade de vogais.
  let quantidade: number = 0;

  // Transforma todas as letras em letras minúsculas (convenção).
  const palavraMinuscula: string = palavra.toLowerCase();

  // Itera sobre cada caractere da palavra.
  for (let i = 0; i < palavraMinuscula.length; i++) {

    // Verifica se o caractere é uma vogal.
    if (vogaisRegex.test(palavraMinuscula[i])) {

      // Incrementa a variável de quantidade.
      quantidade++;
    }
  }
  
  return quantidade;  
}

// Exemplo de uso da função

const palavraExemplo: string = "Chihuahua";

// Chama a função contarVogais para contar as vogais na palavraExemplo.
const quantidadeVogaisExemplo: number = contarVogais(palavraExemplo);

// Exibe o resultado da contagem de vogais.
console.log(`A palavra "${palavraExemplo}" contém ${quantidadeVogaisExemplo} vogais.`);

// Função para processar o formulário
function processarFormulario(event: Event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  const palavraInput = document.getElementById("palavraInput") as HTMLInputElement;
  const resultado = document.getElementById("resultado")!;

  const palavra = palavraInput.value;
  const quantidadeVogais = contarVogais(palavra);

  resultado.innerHTML = `Palavra: "${palavra}"<br>Quantidade de vogais: ${quantidadeVogais}`;
}

// Carregamento do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  const vowelCounterForm = document.getElementById("vowelCounterForm")!;
  vowelCounterForm.addEventListener("submit", processarFormulario);
});
