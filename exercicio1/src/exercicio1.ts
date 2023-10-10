function contarVogais(palavra: string): number {

  // Declaração do array
  const vogais = ["a", "á", "â", "à", "ã", "ä", "å",
                  "e", "é", "ê", "è", "ẽ", "ë", 
                  "i", "í", "î", "ì", "ĩ", "ï", 
                  "o", "ó", "ô", "ò", "õ", "ö", 
                  "u", "ú", "û", "ù", "ũ", "ü"];

  // Declaração de uma variável para contar a quantidade de vogais.
  let quantidade = 0;

  // Transforma todas as letras em letras minúsculas (convenção).
  const palavraMinuscula = palavra.toLowerCase();

  // Itera sobre cada caractere da palavra.
  for (let i = 0; i < palavraMinuscula.length; i++) {

    // Verifica se o caractere é uma vogal.
    if (vogais.includes(palavraMinuscula[i])) {

      // Incrementa a variável de quantidade.
      quantidade++;
    }
  }
  
  return quantidade;  
}

const palavra = "Nordvästersjökustartilleriflygspaningssimulatoranläggningsmaterielunderhållsuppföljningssystemdiskussionsinläggsförberedelsearbeten";

// Chama a função contarVogais para contar as vogais na palavraExemplo.
const quantidadeVogais = contarVogais(palavra);

// Exibe o resultado da contagem de vogais.
console.log(`A palavra "${palavra}" contém ${quantidadeVogais} vogais.`);
