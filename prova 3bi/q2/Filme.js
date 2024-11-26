"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filme = void 0;
class Filme {
    constructor(titulo, diretor, anoLancamento, avaliacoes) {
        this._titulo = titulo;
        this._diretor = diretor;
        this._anoLancamento = anoLancamento;
        this.avaliacoes = avaliacoes;
    }
    get titulo() { return this._titulo; }
    set titulo(titulo) { this._titulo = titulo; }
    get diretor() { return this._diretor; }
    set diretor(diretor) { this._diretor = diretor; }
    get anoLancamento() { return this._anoLancamento; }
    set anoLancamento(anoLancamento) { this._anoLancamento = anoLancamento; }
    adicionarAvaliacao(nota) {
        this.avaliacoes.push(nota);
        console.log("Nota adicionada.");
    }
    calcularMediaAvaliacoes() {
        if (avaliacoes >= 1)
            ;
        this.avaliacoes = nota;
        console.log("Media adionada");
    }
}
exports.Filme = Filme;
