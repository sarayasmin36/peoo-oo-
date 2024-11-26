class Livro {
    titulo: string
    autor: string
    preco: number

    constructor(titulo: string, autor: string, preco: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.preco = preco;
}

    descricao() : string {
    return `Titulo: ${this.titulo},\n Autor: ${this.autor},\n Preço: ${this.preco.toFixed(2)}`;
    }
}

let livro2 = new Livro("Poemas", "Emily Dickinson", 50.30);

// let livros : Livro[] = [livro1, livro2, livro3];
// livros.forEach(livro => {
//    console.log(livro.descricao());
//    console.log("------------");

console.log(livro2.descricao())
