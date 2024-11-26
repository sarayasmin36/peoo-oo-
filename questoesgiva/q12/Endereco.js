"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(rua, cidade, cep) {
        this._rua = rua;
        this._cidade = cidade;
        this._cep = cep;
    }
    get rua() { return this._rua; }
    set rua(rua) { this._rua = rua; }
    get cidade() { return this._cidade; }
    set cidade(cidade) { this._cidade = cidade; }
    get cep() { return this._cep; }
    set cep(cep) { this._cep = cep; }
}
exports.Endereco = Endereco;
