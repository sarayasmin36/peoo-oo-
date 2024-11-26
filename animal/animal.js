"use strict";
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    emitirSom() {
        console.log("Som do animal.");
    }
    mover(distancia) {
        console.log(`${this.nome} se moveu ${distancia} metros.`);
    }
}
class Cachorro extends Animal {
    constructor(nome, raça) {
        super(nome);
        this.raça = raça;
    }
    emitirSom() {
        console.log("au au au au");
    }
    pegar() {
        console.log("vá pegar!!!!");
    }
}
class Gato extends Animal {
    constructor(nome, raça) {
        super(nome);
        this.raça = raça;
    }
    emitirSom() {
        console.log("miau miau");
    }
}
let animais = [new Animal("Onça"),
    new Cachorro("Mel", "Pinscher"),
    new Gato("Bichano", "Frajola")];
animais.forEach(animal => {
    console.log(animal.nome);
    console.log(animal.raça);
    animal.emitirSom();
});
