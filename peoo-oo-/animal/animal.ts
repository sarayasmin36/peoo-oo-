class Animal {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    emitirSom(): void {
        console.log("Som do animal.");
    }
    
    public mover(distancia: number): void {
		    console.log(`${this.nome} se moveu ${distancia} metros.`);
	}
}

class Cachorro extends Animal {
    private raça : string;

    constructor(nome : string, raça : string) {
        super(nome);
        this.raça = raça;
    }
    emitirSom(): void {
        console.log("au au au au");
    }
    pegar(): void {
        console.log("vá pegar!!!!");
    }
}

class Gato extends Animal {
    constructor(nome : string, raça : string) {
        super(nome);
        this.raça = raça
    }
    emitirSom(): void {
        console.log("miau miau");
    }
}

let animais : Animal[] = [new Animal("Onça"), 
                          new Cachorro("Mel", "Pinscher"), 
                          new Gato("Bichano", "Frajola")];
animais.forEach(animal => {
    console.log(animal.nome);
    console.log(animal.raça);
    animal.emitirSom();

    
});