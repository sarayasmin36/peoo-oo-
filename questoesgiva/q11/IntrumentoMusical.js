"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentoMusical = void 0;
class InstrumentoMusical {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }
}
exports.InstrumentoMusical = InstrumentoMusical;
