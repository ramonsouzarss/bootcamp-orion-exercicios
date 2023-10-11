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
    if (vogaisRegex.includes(palavraMinuscula[i])) {

      // Incrementa a variável de quantidade.
      quantidade++;
    }
  }
  
  return quantidade;  
}

const palavra: string = "Nordvästersjökustartilleriflygspaningssimulatoranläggningsmaterielunderhållsuppföljningssystemdiskussionsinläggsförberedelsearbeten";

// Chama a função contarVogais para contar as vogais na palavraExemplo.
const quantidadeVogais: number = contarVogais(palavra);

// Exibe o resultado da contagem de vogais.
console.log(`A palavra "${palavra}" contém ${quantidadeVogais} vogais.`);
