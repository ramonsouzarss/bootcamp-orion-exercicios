interface Pessoa {
    id: number;
    name: string;
    bio: string;
  }
  
  const lista: Pessoa[] = [
    {"id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar"}
  ];


// Retorna a bio do id passado:  
  
  // Funcional
  const retornaBioPorIdFuncional = (id: number): string | undefined => {
    const pessoaEncontrada = lista.find(pessoa => pessoa.id === id);
    return pessoaEncontrada?.bio;
  };

  // Imperativo
  function retornaBioPorIdImperativo(id: number): string | undefined {
    for (const pessoa of lista) {
      if (pessoa.id === id) {
        return pessoa.bio;
      }
    }
    return undefined;
  }
  

// Retorna o nome do id passado:
  
  // Funcional
  const retornaNamePorId = (id: number): string | undefined => {
    const pessoaEncontrada = lista.find(pessoa => pessoa.id === id);
    return pessoaEncontrada?.name;
  };

  // Imperativo
  function retornaNamePorIdImperativo(id: number): string | undefined {
    for (const pessoa of lista) {
      if (pessoa.id === id) {
        return pessoa.name;
      }
    }
    return undefined;
  }


// Apaga um item da lista a partir do id passado :  

  // Funcional
  const apagaItemPorId = (id: number): void => {
    const indice = lista.findIndex(pessoa => pessoa.id === id);
    if (indice !== -1) {
      lista.splice(indice, 1);
    }
  };

  // Imperativo
  function apagaItemPorIdImperativo(id: number): void {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].id === id) {
        lista.splice(i, 1);
        break;
      }
    }
  }
  

// Altera a bio ou o nome a partir do id passado:

  // Funcional
  const alteraBioOuNamePorId = (id: number, novoValor: string, campo: "bio" | "name"): void => {
    const pessoaEncontrada = lista.find(pessoa => pessoa.id === id);
    if (pessoaEncontrada) {
      pessoaEncontrada[campo] = novoValor;
    }
  };

  // Imperativo
  function alteraBioOuNamePorIdImperativo(id: number, novoValor: string, campo: "bio" | "name"): void {
    for (const pessoa of lista) {
      if (pessoa.id === id) {
        pessoa[campo] = novoValor;
        break;
      }
    }
  }
  