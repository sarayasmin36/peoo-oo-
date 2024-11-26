import { Filme } from "./Filme";

export class Catalogo {
    private filmes: Filme[] = [];

    adicionarProduto(filme: Filme) : void {
        this.filmes.push(filme);
            console.log("Filme adicionado.");
        }

        
        listarFilmes() : void {
            console.log("LISTAGEM DOS FILMES:");
            this.filmes.forEach(filme => {
                console.log("- " + filme.());
            });
        }
}