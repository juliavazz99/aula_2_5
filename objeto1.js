const animal = {
  nome: "Luna",
  especie: "Gato",

  emitirSom: function() {
    console.log(`${this.nome} está miando: Miau!`);
  }
};

// Imprimindo as propriedades no terminal
console.log("Nome:", animal.nome);
console.log("Espécie:", animal.especie);

// Chamando o método do objeto
animal.emitirSom();


