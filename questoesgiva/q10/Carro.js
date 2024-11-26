"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(marca, modelo, ano = 2022) {
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
    }
    get marca() { return this._marca; }
    set marca(marca) { this._marca = marca; }
    get modelo() { return this._modelo; }
    set modelo(modelo) { this._modelo = modelo; }
    get ano() { return this._ano; }
    set ano(ano) { this._ano = ano; }
}
exports.Carro = Carro;
