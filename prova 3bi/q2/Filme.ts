export class Filme {
    private _titulo: string;
    private _diretor: string;
    private _anoLancamento: number;
    private avaliacoes: number[];

    constructor(titulo: string, diretor: string, anoLancamento: number, avaliacoes: ) {
    this._titulo = titulo;
    this._diretor = diretor;
    this._anoLancamento = anoLancamento;
    this.avaliacoes = avaliacoes
}

    get titulo(): string { return this._titulo; }
    set titulo(titulo: string) { this._titulo = titulo; }
    get diretor(): string { return this._diretor; }
    set diretor(diretor: string) { this._diretor = diretor; }
    get anoLancamento(): number { return this._anoLancamento; }
    set anoLancamento(anoLancamento: number) { this._anoLancamento = anoLancamento; }

    adicionarAvaliacao(nota: number) : void {
        this.avaliacoes.push(nota);
            console.log("Nota adicionada.");
        }

        calcularMediaAvaliacoes(){
            if (avaliacoes >= 1);
            this.avaliacoes = nota
            console.log("Media adionada")
        }
    }
