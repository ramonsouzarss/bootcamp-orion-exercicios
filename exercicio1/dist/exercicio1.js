"use strict";
function contarVogais(palavra) {
    const vogais = ["a", "á", "â", "à", "ã", "ä", "å",
        "e", "é", "ê", "è", "ẽ", "ë",
        "i", "í", "î", "ì", "ĩ", "ï",
        "o", "ó", "ô", "ò", "õ", "ö",
        "u", "ú", "û", "ù", "ũ", "ü"];
    let quantidade = 0;
    const palavraMinuscula = palavra.toLowerCase();
    for (let i = 0; i < palavraMinuscula.length; i++) {
        if (vogais.includes(palavraMinuscula[i])) {
            quantidade++;
        }
    }
    return quantidade;
}
const palavra = "Nordvästersjökustartilleriflygspaningssimulatoranläggningsmaterielunderhållsuppföljningssystemdiskussionsinläggsförberedelsearbeten";
const quantidadeVogais = contarVogais(palavra);
console.log(`A palavra "${palavra}" contém ${quantidadeVogais} vogais.`);
//# sourceMappingURL=exercicio1.js.map