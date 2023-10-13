// Função para contar as vogais
function contarVogais(palavra: string): number {
    const vogaisRegex: RegExp = /[aeiouáàâãåéêíóôõúü]/i;
  
    let quantidade: number = 0;
    const palavraMinuscula: string = palavra.toLowerCase();
  
    for (let i = 0; i < palavraMinuscula.length; i++) {
      if (vogaisRegex.test(palavraMinuscula[i])) {
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
  
  // Aguarde o carregamento do DOM antes de executar o código
  document.addEventListener("DOMContentLoaded", function () {
    const vowelCounterForm = document.getElementById("vowelCounterForm")!;
    vowelCounterForm.addEventListener("submit", processarFormulario);
  });
  